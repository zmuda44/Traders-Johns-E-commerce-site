const router = require('express').Router();
const { where } = require('sequelize');
const { Product, User } = require('../../models');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.create(req.body);
    
      req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);   
    });
  } catch (error) {
      console.error('Failed to create new user', error);
  }
})
router.post('/login', async (req, res) => {

  try {
    const username = req.body.username; 
    const password = req.body.password;

    const userData = await User.findOne({ where: { username: username } });
    if (!userData){
      return res.status(401).json({ message: "Invalid username."});
      }
      const validPassword = await userData.checkPassword(password);
      
      if (!validPassword) {
        res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
        return;
        }
        
        req.session.save(() => {
      console.log(userData.dataValues);
      req.session.user_id = userData.dataValues.id;
      req.session.logged_in = true;
      console.log(req.session);
      console.log(req.session.id);
      });

  } catch (error) {
    console.error('Failed to login.', error);
  }
});


      
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  }
});

module.exports = router;

