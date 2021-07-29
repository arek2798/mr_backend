const mongoose = require('mongoose');
require('../models/Question');

const Question = mongoose.model('question');

const question = {
    addQuestion: async (req, res) => {
        const newQuestionContent = {
            testID: req.body.testID,
            question: req.body.question,
            answers: req.body.answers
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
        Question.find({ testID: req.query.testID })
            .then((results) => res.send(results))
            .catch((err) => console.log(err));
    }
}

module.exports = question;