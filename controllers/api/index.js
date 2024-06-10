const router = require('express').Router();
const userRoutes = require('./userRoutes');
const adminRoutes = require('./adminRoutes');

router.use('/users', userRoutes);
router.use('/admin', adminRoutes);

router.use('/', (req, res) => {
  res.send("api route")
})

module.exports = router;