const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

const putPage = [
  {
    id: 1,
    category_name: "hello i am greg"
  }
]

router.use('/', (req, res) => {
    res.render('homepage', putPage[0]);
})


module.exports = router;