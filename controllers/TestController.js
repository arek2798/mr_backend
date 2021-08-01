const mongoose = require('mongoose');
require('../models/Test');

const Test = mongoose.model('test');

const test = {
    addTest: async (req, res) => {
        const newTestContent = {
            title: req.body.title,
            slug: req.body.slug
        };

        try {
            const newTest = await new Test(newTestContent).save((err, test) => {
                res.send(test);
                console.log(test);
            });
        } catch (err) {
            console.log(err);
            res.sendstatus(500);
        }
    },
    getAllTests: (req, res) => {
        console.log(req.query);
        Test.find()
            .then((results) => res.send(results))
            .catch((err) => console.log(err));
    },
    getTest: (req, res) => {
        console.log(req.query);
        Test.find({ _id: req.query.testID })
            .then((results) => res.send(results))
            .catch((err) => console.log(err));
    }
}

module.exports = test;