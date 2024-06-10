const router = require('express').Router();
const userRoutes = require('./user-routes');
const adminRoutes = require('./admin-routes');

router.use('/users', userRoutes);
router.use('/admin', adminRoutes);

router.use('/', (req, res) => {
  res.send("api route")
})

module.exports = router;