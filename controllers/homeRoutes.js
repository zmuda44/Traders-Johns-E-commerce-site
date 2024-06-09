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

module.exports = router;
