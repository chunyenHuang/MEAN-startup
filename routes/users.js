const Users = require('express').Router();

Users.get('/', (req, res)=> {
    res.sendStatus(200);
});

module.exports = Users;
