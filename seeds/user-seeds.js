// Connection to User Model
const { User } = require('../models');

// user fill-in
const userData = [
    // username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234' from past examples as placeholder.
    {
        username: 'Lernantino',
        email: 'Lernantino@gmail.com',
        password: 'password1234'
    },
    {
        username: 'Username',
        email: 'username@gmail.com',
        password: 'password'
    }
];

// bulk create function
const seedUsers = () => User.bulkCreate(userData);

// Export for external
module.exports = seedUsers;