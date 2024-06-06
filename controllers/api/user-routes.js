const router = require('express').Router();
const { Product } = require('../../models');

router.get('/', async (req, res) => {

  try {
    const productData = await Product.findAll();
    const products = productData.map((product) => product.get({ plain: true }));
    res.render('all', { products });
  }  
  catch (err) {
    res.json("hello");
  };
  
  
  
  
});

module.exports = router;