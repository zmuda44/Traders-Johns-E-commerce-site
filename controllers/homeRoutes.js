const router = require('express').Router();
const { Product, User, Category } = require('../models');
const withAuth = require('../utils/auth');
const { Convert } = require("easy-currencies");


//Get route to homepage
router.get('/', async (req, res) => {

    try {
        const productData = await Product.findAll({
            include: [{
                model: Category,
                attributes: ['category_name'],
            }] // Include the Category model to fetch associated categories
        });

        const products = productData.map((product) => product.get({ plain: true }));
         

        res.render('homepage', { products, logged_in: req.session.logged_in });
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
        const productData = await Product.findAll(
            {
                include: [{
                    model: Category,
                    attributes: ['category_name'],
                }] // Include the Category model to fetch associated categories
            }
        );
        const user = userData.get({ plain: true });
        const products = productData.map((product) => product.get({ plain: true }));

        res.render('profile', { ...user, products, logged_in: req.session.logged_in });
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.get('/products/:category_id', async (req,res) =>{
    try {
        let products = await Product.findAll({ where: {category_id: req.params.category_id}})
        products = products.map(product => product.get({plain:true }));
        res.render('homepage', {products})
    }catch (error){
        res.status(500).json(err);
    }
  })

router.get('/checkout/:product_id', async (req, res) => {
    try {
        let productData = await Product.findByPk(req.params.product_id, {
            include: [{ model: User, attributes: ['username'] }]
        })
        
        let product = productData.get({ plain: true });

        console.log(product)

    }
    catch (error) {

    }
})


//Route and converter to convert USD to euros

const convertCurrency = async (price) => {
    try {
        // Assuming you have a function Convert() that performs currency conversion
        const convertedPrice = await Convert(price).from("USD").to("EUR");
        return convertedPrice;
    } catch (error) {
        console.error("Error converting currency:", error);
        throw error;
    }
};

router.get('/euros', async (req, res) => {

    try {
        const productData = await Product.findAll({
            include: [{
                model: Category,
                attributes: ['category_name'],
            }] // Include the Category model to fetch associated categories
        });

        const productPromises = productData.map(async (product) => {
            const convertedPrice = await convertCurrency(product.price);
            return {
                ...product.get({ plain: true }),
                convertedPrice
            };
        });

        const products = await Promise.all(productPromises);
       

        res.render('euros-homepage', { products, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
