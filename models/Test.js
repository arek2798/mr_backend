const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
}, { collection: "tests" });

mongoose.model('test', TestSchema);