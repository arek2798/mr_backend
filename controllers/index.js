const user = require('./UserController');
const userStats = require('./UserStatsController');
const question = require('./QuestionController');
const test = require('./TestController');
const lesson = require('./LessonController');

module.exports = {
    user,
    userStats,
    test,
    question,
    lesson,
};