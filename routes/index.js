const express = require('express');

const { user, userStats, test, question, lesson } = require('../controllers');

const router = express.Router();

router.post('/user/signin', user.loginUser);
router.post('/user', user.addUser);

router.get('/userstats', userStats.getUserStats);
router.post('/userstats', userStats.addUserStats);
router.put('/userstats/:id', userStats.updateUserStats);
router.delete('/userstats/:id', userStats.deleteUserStats);

router.get('/questions', question.getTestQuestions);
router.get('/question', question.getQuestion);
router.post('/question', question.addQuestion);

router.get('/test', test.getTest);
router.get('/tests', test.getAllTests);
router.post('/tests', test.addTest);

router.get('/lesson', lesson.getLesson);
router.get('/lessons', lesson.getAllLessons);
router.post('/lessons', lesson.addLesson);

module.exports = router;