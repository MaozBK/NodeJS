const express = require('express');
const usersBLL = require('../BLL/usersBLL');

// Entry point: http://localhost:3000/users

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await usersBLL.getAllUsers();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;

