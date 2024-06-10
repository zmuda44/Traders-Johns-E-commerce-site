const router = require('express').Router();
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);


router.use('/', (req, res) => {
  res.send("api route")
})

module.exports = router;