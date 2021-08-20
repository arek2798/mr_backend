const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    icon: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        require: true,
        unique: true
    }
}, { collection: "tests" });

mongoose.model('test', TestSchema);