const { User } = require('../models');

const userData = [
    {
        username: "laith_rue",
        email: "laith.rue32@ymail.com",
        password: "password123"
    },
    {
        username: "applesaucelacey",
        email: "appsalace@gmail.com",
        password: "password123"
    },
    {
        username: "jaywell",
        email: "jayson.a.wells@yahoo.com",
        password: "password123"
    },
    {
        username: "k.wills",
        email: "kailawilliams2@ymail.com",
        password: "p@ssword4"
    },
    {
        username: "haileywhite223",
        email: "haily223@gmail.com",
        password: "password123"
    },
    {
        username: "bo.mallie",
        email: "bmallie@aol.com",
        password: "password123"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;