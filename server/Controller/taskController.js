const Task = require('../Model/taskModel');
const { Op } = require('sequelize');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const fillObj = require('../utils/fillObj');
const moment = require('moment');
//CREATE NEW TASK
exports.createTask = catchAsync(async (req, res, next) => {
  req.body.user_id = req.user.user_id;
  const task = await Task.create(req.body);
  res.status(200).json({
    status: 'Success',
    data: {
      task,
    },
  });
});

//GET LIST [FILTER: SORT, SEARCH]
exports.getTaskList = catchAsync(async (req, res, next) => {
  const { page = 1, perPage = 12 } = req.body;
  const sortBy = fillObj(req.body);
  sortBy.unshift(['completed', 'ASC']);
  console.log(sortBy);
  const taskList = await Task.findAndCountAll({
    order: sortBy, //SORT
    where: {
      user_id: req.user.user_id, //SELECT USER'S TASK
      [Op.or]: [
        {
          task_name: {
            [Op.substring]: req.body.search || '', //SEARCH NAME
          },
        },
        {
          task_description: {
            [Op.substring]: req.body.search || '', //SEARCH DESCRIPTION
          },
        },
      ],
    },
    limit: perPage,
    offset: (page - 1) * perPage,
  });

  taskList.rows.forEach(task => {
    task.dataValues.task_due = moment(task.dataValues.task_due).format('YYYY-MM-DD h:mm:ss a');
  })
  
  res.status(200).json({
    status: 'Success',
    data: {
      count: taskList.count,
      tasks: taskList.rows,
      totalPages: Math.ceil(taskList.count / perPage),
      currentPage: page,
    },
  });
});

//GET TASK DETAIL
exports.getTask = catchAsync(async (req, res, next) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return next(new AppError('Task not found', 404));
  res.status(200).json({
    status: 'Success',
    data: {
      task,
    },
  });
});

//UPDATE TASK BY ID
exports.updateTask = catchAsync(async (req, res, next) => {
  const task = await Task.update(req.body, {
    where: {
      task_id: req.params.id,
    },
  });
  if (task[0] < 1) return next(new AppError('Task not found', 404));
  res.status(200).json({
    status: 'Success',
  });
});

//DELETE TASK BY ID
exports.deleteTask = catchAsync(async (req, res, next) => {
  const task = await Task.destroy({
    where: {
      task_id: req.params.id,
    },
  });
  if (!task) return next(new AppError('Task not found', 404));
  res.status(200).json({
    status: 'Success',
  });
});
