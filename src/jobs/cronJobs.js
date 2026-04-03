const cron = require('node-cron');

cron.schedule('0 0 * * *', () => {
  console.log("Running daily job...");
});