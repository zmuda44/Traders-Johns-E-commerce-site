const router = require('express').Router();
const { Product, User, Category } = require('../models');
// const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        console.log(req.session);
        console.log(req.session.id);
        const productData = await Product.findAll({
            include: Category
        });
        
        const products = productData.map((product) => product.get({ plain: true }));

        res.render('homepage', { products });
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

router.get('/profile', async (req, res) => {
    try {        
        const productData = await Product.findAll();
        
        const products = productData.map((product) => product.get({ plain: true }));

        res.render('profile', { products, logged_in: req.session.logged_in });
    }
    catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;
