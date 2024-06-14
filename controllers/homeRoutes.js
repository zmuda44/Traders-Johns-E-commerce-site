const router = require('express').Router();
const { Product, User, Category } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
    try {
        console.log(req.session);
        console.log(req.session.id);
        const productData = await Product.findAll({
            include: Category
        });
        
        const products = productData.map((product) => product.get({ plain: true }));

        res.render('homepage', { products, logged_in: req.session.logged_in });
    }
    catch (err) {
        res.status(500).json(err);
    }
    try {
        const productData = await Product.findAll({
            include: [{
                model: Category,
                attributes: ['category_name'],
            }] // Include the Category model to fetch associated categories
        });

        const products = productData.map((product) => product.get({ plain: true }));
         

        res.render('homepage', { products });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    res.render('login', {logged_in: req.session.logged_in});
})

router.get('/profile', withAuth, async (req, res) => {
    try {        
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Product }],
          });
        const productData = await Product.findAll();
        const user = userData.get({ plain: true });
        const products = productData.map((product) => product.get({ plain: true }));

        res.render('profile', { ...user, products, logged_in: req.session.logged_in });
    }
    catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;
