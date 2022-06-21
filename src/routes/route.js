const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller');
const validateUser = require('../middlewares/userMiddleware');
const validadeAuth = require('../middlewares/validateJWT');

router.post('/login', userController.userAuthControler);
router.post('/user', validateUser, userController.createUserController);
router.get('/user', validadeAuth, userController.findAllUsers);
module.exports = router;