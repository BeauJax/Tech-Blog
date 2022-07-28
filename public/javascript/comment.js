const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Donec posuere metus vitae ipsum."
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Donec posuere metus vitae ipsum."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Donec posuere metus vitae ipsum."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We just reached a million subscribers! Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Donec posuere metus vitae ipsum."
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Donec posuere metus vitae ipsum."
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Donec posuere metus vitae ipsum."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Donec posuere metus vitae ipsum."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;