const express = require('express');
const taskRouter = express.Router();
const taskController = require('../Controller/taskController');
const authController = require('../Controller/authController');

//[URL] /api/v1/task

//GET TASK LIST
taskRouter.post('/list', authController.protect, taskController.getTaskList);

//CREATE NEW TASK
taskRouter.post('/', authController.protect, taskController.createTask);

//DELETE TASK
taskRouter.delete('/:id', authController.protect, taskController.deleteTask);

//UPDATE TASK
taskRouter.patch('/:id', authController.protect, taskController.updateTask);

//TASK DETAIL
// taskRouter.get(
//   '/:id',
//   authController.protect,
//   taskController.getTask
// );

//Filter
// taskRouter.get('/', authController.protect, taskController.filter);

module.exports = taskRouter;
