const express = require('express');

const { user, userStats, question } = require('../controllers');

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

router.get('/question', question.getQuestion);
router.post('/question', question.addQuestion);

module.exports = router;