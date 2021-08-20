const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('../models/User');

const User = mongoose.model('user');

const user = {
    addUser: async (req, res) => {
        const newUserContent = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
        }

        try {
            await new User(newUserContent).save((err, user) => {
                console.log(err)
                if (err && err.code === 11000) res.json({ errorCode: 409, message: 'User already exists' })
                else if (err) res.json({ errorCode: 501, message: 'User cannot be created' })
                else res.json({ errorCode: 201, message: 'User has been created', id: user._id });
            })
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    },

    loginUser: (req, res) => {
        sess = req.session;
        User.findOne({ email: req.body.email })
            .then((user) => {
                if (!user) return res.json({ errorCode: 404, message: 'Login failed, user not found' })
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (result === true) {
                        sess.email = req.body.email;
                        console.log(sess);
                        res.send(user)
                    } else {
                        res.json({ errorCode: 405, message: 'Not allowed' })
                        console.log("Not allowed")
                    }
                })
            })
            .catch(err => console.log(err))
    },

    updateUser: (req, res) => {
        let hashedPassword = '';
        bcrypt.hash(req.body.newPassword, 10, function (err, hash) {
            if (err) {
                console.log(err);
            }
            console.log(hash);
            hashedPassword = hash;
        })
        const newUserContent = {
            email: req.body.user.email,
            password: hashedPassword,
            name: req.body.user.name,
        };
        User.findOne({ email: req.body.user.email })
            .then((user) => {
                if (!user) return res.json({ errorCode: 404, message: 'Login failed, user not found' })
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (result === true) {
                        User.findByIdAndUpdate(req.params.id, newUserContent)
                            .then((updatedUser) => (res.send(updatedUser)))
                            .catch((err) => console.log(err));
                    } else {
                        res.json({ errorCode: 409, message: 'Password does not match' })
                        console.log("Password does not match")
                    }
                })
            })
            .catch(err => console.log(err))
    },

    deleteUser: (req, res) => {
        Event.findByIdAndDelete(req.params.id)
            .then(result => {
                if (!result) {
                    res.sendStatus(404);
                    res.send(result)
                }
                else res.sendStatus(200);
            })
            .catch(err => res.sendStatus(500));
    }
}

module.exports = user;