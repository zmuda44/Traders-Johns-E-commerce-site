const router = require('express').Router();
const { Product, User, Category } = require('../../models');



// router.post('/', withAuth, async (req, res) => {

router.post('/', async (req, res) => {
  console.log("hello")  
  try {
      const newProduct = await Product.create(req.body);
      console.log(newProduct)
  
      res.status(200).json("hello");
    } catch (err) {
      res.status(400).json(err);
    }

});

router.get('/:category_id', async (req,res) =>{
  try {
    let products = await Product.findAll({ where: {category_id: req.params.category_id}})
    products = products.map(product => product.get({plain:true }));
    res.render('homepage', {products})
  }catch (error){
    res.status(500).json(err);
  }
})









module.exports = router;

// router.post('/', withAuth, async (req, res) => {
//   console.log("hello")
  
//   try {
//       const newProject = await Product.create({
//         ...req.body,
//         user_id: req.session.user_id,
//       });
      
  
//       res.status(200).json("hello");
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });