const express = require('express');
const userRouter = express.Router();
const authController = require('../Controller/authController');
const userController = require('../Controller/userController');
//userController.getUser
userRouter.get('/', userController.getUser);
userRouter.post('/', userController.createUser);


module.exports = userRouter;