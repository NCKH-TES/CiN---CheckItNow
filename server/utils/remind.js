const sendEmail = require('./sendEmail');
const catchAsync = require('./catchAsync');
const User = require('../Model/userModel');
const Task = require('../Model/taskModel');
const cron = require('node-cron');

const remind = catchAsync(async () => {
  //Find All users
  const users = await User.findAll({
    include: Task,
  });

  //list email & tasks
  const list = await users.map((value) => {
    const obj = {
      email: value.email,
      name: value.user_name,
      tasks: [],
    };
    value.Tasks.forEach((value) => {
      if (
        value.task_due - Date.now() <= 24 * 60 * 60 * 1000 &&
        value.task_due - Date.now() > 0
      )
        obj.tasks.push(value.task_name);
    });
    return obj;
  });

  //send email for each user
  list.forEach(
    catchAsync(async (value) => {
      //No task to remind
      if (value.tasks.length == 0) return;
      //HTML text
      const htmlText = value.tasks
        .map((task) => {
          return `<li><p style="size: large">◯ ${task}</p></li>`;
        })
        .join('');
      //options for email
      const options = {
        email: value.email,
        subject: `🙋CHECK YOUR TASKS TODAY!`,
        // text: `You have ${value.tasks.length} tasks to complete today`,
        html: `Hi <strong>${value.name}</strong>,<br>
        <p>You have <strong>${value.tasks.length} tasks</strong> waiting to be tackled. Let's do this 💪</p><br>
        <ul style="list-style: none">${htmlText}</ul><br><br>
        <a href="${process.env.SERVER_PROD}" style="text-decoration: none">→ Reschedule your tasks</a><br>
        <p>Have a good day 🙂,</p>
        <p>DAC Team</p>`,
      };
      //send Email
      await sendEmail(options);
    })
  );
});

// Minute:Hour
const reminder = () => {
  cron.schedule('0 7 * * *', remind, {
    scheduled: true,
    timezone: 'Asia/Ho_Chi_Minh',
  });
};

module.exports = reminder;
