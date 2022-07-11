const { Post } = require('../models');

const postData = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        post_content: 'Donec posuere metus vitae ipsum.',
        user_id: 3
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_content: 'Morbi non quam nec dui luctus rutrum.',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_content: 'Morbi non quam nec dui luctus rutrum.',

    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_content: 'Morbi non quam nec dui luctus rutrum.',
        user_id: 5
    },
    {
        title: 'Pellentesque eget nunc.',
        post_content: 'Pellentesque eget nunc.',
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;