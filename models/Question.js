const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    testID: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    answer1: {
        type: String,
        required: true,
    },
    answer2: {
        type: String,
        required: true,
    },
    answer3: {
        type: String,
        required: true,
    }
}, { collection: "questions" });

mongoose.model('question', QuestionSchema);