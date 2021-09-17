const sendEmail = require('./sendEmail');
const catchAsync = require('./catchAsync');
const User = require('../Model/userModel');
const Task = require('../Model/taskModel');
const cron = require('node-cron');

const remind = catchAsync(async () => {
    //Find All users
    const users = await User.findAll({
        include: Task,
    })

    //list email & tasks
    const list = await users.map(value => {
        const obj = {
            email: value.email,
            tasks: [],
        };
        value.Tasks.forEach(value => {
            if( value.task_due - Date.now()  <= 24 * 60 * 60 * 1000 &&  value.task_due - Date.now() > 0)
                obj.tasks.push(value.task_name);
        })
        return obj;
    });

    //send email for each user
    list.forEach( catchAsync(async value => {
        //No task to remind
        if(value.tasks.length == 0)
            return;
        //HTML text
        const htmlText = value.tasks.map(task => {
            return `<li>${task}</li>`
        }).join('');
        //options for email
        const options = {
            email: value.email,
            subject: `REMINDER TO COMPLETE YOUR TASKS`,
            text: `You have ${value.tasks.length} tasks to complete today`,
            html: `<strong>Tasks</strong><br><ul>${htmlText}</ul>`
        }
        //send Email
        await sendEmail(options);
    }))
});

// Minute:Hour
const reminder = () => {
    cron.schedule('0 7 * * *', remind,
    {
        scheduled: true,
        timezone: "Asia/Ho_Chi_Minh"
    }); 
}
 
module.exports = reminder;