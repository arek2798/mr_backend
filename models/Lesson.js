const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        require: true,
        unique: true
    },
    desc: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    icon: {
        type: String,
        require: true,
    },
    color: {
        type: String,
        require: true,
    }
}, { collection: "lessons" });

mongoose.model('lesson', LessonSchema);