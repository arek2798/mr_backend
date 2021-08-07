const mongoose = require('mongoose');
require('../models/Lesson');

const Lesson = mongoose.model('lesson');

const lesson = {
    addLesson: async (req, res) => {
        const newLessonContent = {
            title: req.body.title,
            slug: req.body.slug,
            desc: req.body.desc,
            content: req.body.content,
            icon: req.body.icon
        };

        try {
            const newLesson = await new Lesson(newLessonContent).save((err, lesson) => {
                res.send(lesson);
                console.log(lesson);
            });
        } catch (err) {
            console.log(err);
            res.sendstatus(500);
        }
    },
    getAllLessons: (req, res) => {
        console.log(req.query);
        Lesson.find()
            .then((results) => res.send(results))
            .catch((err) => console.log(err));
    },
    getLesson: (req, res) => {
        console.log(req.query);
        Lesson.find({ slug: req.query.slug })
            .then((results) => res.send(results))
            .catch((err) => console.log(err));
    }
}

module.exports = lesson;