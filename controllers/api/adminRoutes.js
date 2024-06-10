const router = require('express').Router();

router.get('/', (req, res) => {
  res.send("hello admin route")
})

module.exports = router;