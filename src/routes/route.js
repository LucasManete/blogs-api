const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller');
const categoriesController = require('../controllers/categories.controller');
const blogPostController = require('../controllers/blogPost.controller');
const validateUser = require('../middlewares/userMiddleware');
const validadeAuth = require('../middlewares/validateJWT');

router.post('/login', userController.userAuthControler);
router.post('/user', validateUser, userController.createUserController);
router.get('/user', validadeAuth, userController.findAllUsersController);
router.get('/user/:id', validadeAuth, userController.findByIdController);

router.post('/categories', validadeAuth, categoriesController.createCategory);
router.get('/categories', validadeAuth, categoriesController.findAllCategoryController);

router.get('/post', validadeAuth, blogPostController.getAllBlogPost);
router.get('/post/:id', validadeAuth, blogPostController.getByPkBlogPost);
router.put('/post/:id', validadeAuth, blogPostController.updatePost);
module.exports = router;