const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller');
const validateUser = require('../middlewares/userMiddleware');

router.post('/login', userController.userAuthControler);
router.post('/user', validateUser, userController.createUserController);
module.exports = router;