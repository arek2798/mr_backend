const mongoose = require('mongoose');
require('../models/Question');

const Question = mongoose.model('question');

const question = {
    addQuestion: async (req, res) => {
        const newQuestionContent = {
            testID: req.body.testID,
            question: req.body.question,
            answer1: req.body.answer1,
            answer2: req.body.answer2,
            answer3: req.body.answer3,
        };

        try {
            const newQuestion = await new Question(newQuestionContent).save((err, question) => {
                res.send(question);
                console.log(question);
            });
        } catch (err) {
            console.log(err);
            res.sendstatus(500);
        }
    },
    getQuestion: (req, res) => {
        console.log(req.query);
        question.find({ testID: req.query.testID })
            .then((results) => res.send(results))
            .catch((err) => console.log(err));
    }
}

module.exports = question;