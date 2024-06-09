const router = require('express').Router();
const { Project, User } = require('../models');
// const withAuth = require('../utils/auth');


router.use('/', (req, res) => {
    res.render('homepage', putPage[0]);
})
