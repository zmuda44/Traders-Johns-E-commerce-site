const router = require('express').Router();
const { Product, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        console.log(req.session);
        console.log(req.session.id);
        const productData = await Product.findAll();

        const products = productData.map((product) => product.get({ plain: true }));

        res.render('homepage', { products, logged_in: req.session.logged_in });
    }
    catch (err) {
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

router.get('/', async (req,res) =>{
    try {
      const category= req.params.category_name;
      const productData= await Category.findAll({where: {category: category}});
      if(productData){
  
      }
  
    }catch (error){
      res.status(500).json(err);
    }
  })


module.exports = router;
