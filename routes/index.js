const express = require('express');

const { user } = require('../controllers');

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({
        hello: "hi!"
    });
})

router.post('/user/signin', user.loginUser);
router.post('/user', user.addUser);

module.exports = router;