// Imports/Requires
const chalk = require('chalk');

const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');

// sequelize connection
const sequelize = require('../config/connection');

// seeding logic                           
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log(chalk.cyan.bold('\n----- DATABASE SYNCED -----\n'));

  await seedUsers();
  console.log(chalk.greenBright('\n----- USERS SEEDED -----\n'));

  await seedPosts();
  console.log(chalk.greenBright('\n----- POSTS SEEDED -----\n'));

  process.exit(0);
};

seedAll();
