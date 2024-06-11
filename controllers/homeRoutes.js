const router = require('express').Router();
const { Product, User } = require('../models');
// const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll();

        const products = productData.map((product) => product.get({ plain: true }));

        res.render('homepage', {products});
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/profile', async (req, res) => {
    try {

        const userData = await User.findByPk(req.session.user_id);
        const productData = await Product.findAll();

        const user = userData.get({ plain: true })
        const products = productData.map((product) => product.get({ plain: true }));

        res.render('profile', { products, user });
    }
    catch (err) {
        res.status(500).json(err);
    }    
})

module.exports = router;
