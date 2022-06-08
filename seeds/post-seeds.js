// Post seed information to import
const { Post } = require('../models');

const postData = [
    {
        title: 'Advanced quantum computer made available to the public for first time',
        post_url: 'https://www.newscientist.com/article/2322807-advanced-quantum-computer-made-available-to-the-public-for-first-time/',
        user_id: 1,
    },
    {
        title: 'Mini nuclear power stations may produce more waste than large ones',
        post_url: 'https://www.newscientist.com/article/2322252-mini-nuclear-power-stations-may-produce-more-waste-than-large-ones/',
        user_id: 1,
    },
    {
        title: 'Synthetic membrane could lead to self-replicating artificial cells',
        post_url: 'https://www.newscientist.com/article/2322222-synthetic-membrane-could-lead-to-self-replicating-artificial-cells/',
        user_id: 1,
    },
];

// bulkCreate function to populate table
const seedPosts = () => Post.bulkCreate(postData);

// Export for external
module.exports = seedPosts;