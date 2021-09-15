const {DataTypes} = require('sequelize');
const {sequelize, Sequelize} = require('../config/DBconfig');
const Task = require('./taskModel');

const User = sequelize.define('User', {
    user_id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV1, 
        primaryKey: true,
        allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(200),
        defaultValue: process.env.DEFAULT_PASSWORD_GOOGLE,
        allowNull: false,
    },
    provider: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'system'
    },
});

User.hasMany(Task, {
    foreignKey: {
      name: 'user_id',
      allowNull: false
    },
    onDelete: 'CASCADE'
});
Task.belongsTo(User);
module.exports = User;









































// const mongoose = require('mongoose');
// const validator = require('validator');
// const userSchema = new mongoose.Schema({
//     displayName: {
//         type: String,
//         maxLength: 24,
//         minLength: 12,
//         required: [true, "Provide your name to display!"],
//     },
//     email: {
//         type: String,
//         unique: true,
//         validate: [validator.isEmail, 'Invalid email!'],
//         lowercase: true,
//     },
//     password: {
//         type: String,
//         required: [true, 'Please provide your password'],
//     },
//     passwordConfirm: {
//         type: String,
//         required: [true, 'Please confirm your password'],
//         validate: {
//             validator: function(val) {
//                 return val === this.password;
//             },
//             message: 'confirm password must be the same with password!'
//         },
//     },
//     role: {
//         type: String,
//         enum: {
//             values: ['admin', 'user'],
//             message: 'Invalid role. Only user and admin',
//         },
//         default: 'user',
//     },
// }, {
//     timestamps: true,
// })

// const User = mongoose.model('User', userSchema);

// module.exports = User;
