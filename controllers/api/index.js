const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes')


router.use('/users', userRoutes);
router.use('/products', productRoutes);


router.use('/', (req, res) => {
  res.send("api route")
})

module.exports = router;