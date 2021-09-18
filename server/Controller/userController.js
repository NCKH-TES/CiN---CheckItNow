const User = require('../Model/userModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const { sequelize } = require('../config/DBconfig');
exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.json({
    status: 'Success',
    data: {
      newUser,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({
    status: 'Success',
    result: users.length,
    data: {
      users,
    },
  });
});
