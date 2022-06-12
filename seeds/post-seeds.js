// Post seed information to import
const { Post } = require('../models');

const postData = [
    {
        title: 'Advanced quantum computer made available to the public for first time',
        post_content: 'Words for Example',
        user_id: 1,
    },
    {
        title: 'Mini nuclear power stations may produce more waste than large ones',
        post_content: 'Text for Example',
        user_id: 1,
    },
    {
        title: 'Synthetic membrane could lead to self-replicating artificial cells',
        post_content: 'Speech for Example',
        user_id: 1,
    },
];

// bulkCreate function to populate table
const seedPosts = () => Post.bulkCreate(postData);

// Export for external
module.exports = seedPosts;