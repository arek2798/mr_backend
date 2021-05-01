const express = require('express');

const { user, userStats } = require('../controllers');

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({
        hello: "hi!"
    });
})

router.post('/user/signin', user.loginUser);
router.post('/user', user.addUser);

router.get('/userstats', userStats.getUserStats);
router.post('/userstats', userStats.addUserStats);
router.put('/userstats/:id', userStats.updateUserStats);
router.delete('/userstats/:id', userStats.deleteUserStats);

module.exports = router;