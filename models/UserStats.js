const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserStatsSchema = new Schema({
    userID: {
        type: String,
        required: true,
        unique: true,
    },
    points: {
        type: Number,
        required: true,
    },
    lastDayQuestion: {
        type: Date,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    avatarType: {
        type: String,
        required: true,
    },
    badges: {
        type: Array
    },
    lessonsStats: [
        {
            lessonId: String,
        }
    ],
    testsStats: [
        {
            testId: String,
            maksScore: Number,
        }
    ],
}, { collection: "userStats" });

mongoose.model('userStats', UserStatsSchema);