const router = require('express').Router();
const { Product, User } = require('../../models');
const withAuth = require('../../utils/auth');



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