const { DataTypes } = require('sequelize');
const {sequelize, Sequelize} = require('../config/DBconfig');
const User = require('./userModel');

const Task = sequelize.define('Task', {
    task_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV1, 
        primaryKey: true,
        allowNull: false,
    },
    task_name: DataTypes.STRING,
    task_description: DataTypes.TEXT,
    priority: {
        type: DataTypes.ENUM('low', 'medium', 'high'),
        defaultValue: 'low'
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    task_due: {
        type: DataTypes.DATE,
        defaultValue: new Date(Date.now() + 24 * 60 * 60 * 60 * 1000) //1 day
    },
    user_id: DataTypes.UUID,
})



module.exports = Task;