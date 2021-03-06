const mongoose = require('mongoose');
require('../models/UserStats');

const UserStats = mongoose.model('userStats');

UserStats.syncIndexes();

const userStats = {
    addUserStats: async (req, res) => {
        const newUserStatsContent = {
            userID: req.body.userID,
            points: req.body.points,
            lastDayQuestion: req.body.lastDayQuestion,
            level: req.body.level,
            avatarType: req.body.avatarType,
            badges: req.body.badges,
            lessonsStats: req.body.lessonsStats,
            testsStats: req.body.testsStats,
            loginStats: req.body.loginStats,
            testsInRow: req.body.testsInRow,
            dayQuestion: req.body.dayQuestion
        };

        try {
            const newUserStats = await new UserStats(newUserStatsContent).save((err, userStats) => {
                if (err) {
                    console.log(err);
                }
                res.send(userStats);
                console.log(userStats);
            });
        } catch (err) {
            console.log(err);
            res.sendstatus(500);
        }
    },
    updateUserStats: (req, res) => {
        const updatedUserStatsContent = {
            userID: req.body.userID,
            points: req.body.points,
            lastDayQuestion: req.body.lastDayQuestion,
            level: req.body.level,
            avatarType: req.body.avatarType,
            badges: req.body.badges,
            lessonsStats: req.body.lessonsStats,
            testsStats: req.body.testsStats,
            loginStats: req.body.loginStats,
            testsInRow: req.body.testsInRow,
            dayQuestion: req.body.dayQuestion
        };
        UserStats.findByIdAndUpdate(req.params.id, updatedUserStatsContent)
            .then((updatedUserStats) => (res.send(updatedUserStats)))
            .catch((err) => console.log(err));
    },
    deleteUserStats: (req, res) => {
        UserStats.findByIdAndDelete(req.params.id)
            .then((result) => {
                if (!result) {
                    res.sendStatus(404)
                } else {
                    res.sendStatus(200);
                }
            })
            .catch((err) => res.sendStatus(500));
    },
    getUserStats: (req, res) => {
        console.log(req.query);
        UserStats.find({ userID: req.query.userID })
            .then((results) => res.send(results))
            .catch((err) => console.log(err));
    }
}

module.exports = userStats;