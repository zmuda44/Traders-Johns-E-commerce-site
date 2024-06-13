const router = require('express').Router();
const { Product, User } = require('../models');
// const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        console.log(req.session);
        console.log(req.session.id);
        const productData = await Product.findAll();

        const products = productData.map((product) => product.get({ plain: true }));

        res.render('homepage', { products });
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
        

        
        const productData = await Product.findAll();
        
        const products = productData.map((product) => product.get({ plain: true }));

        res.render('profile', { products });
    }
    catch (err) {
        res.status(500).json(err);
    }
})
router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
        res.redirect('/login');
        });
    }
    else {
        res.redirect('/login');
    }
});

module.exports = router;
