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
        unique: true
    },
    answers: {
        type: Array,
        required: true,
    }
}, { collection: "questions" });

mongoose.model('question', QuestionSchema);