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
                res.send(user);
                console.log(err)
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
                if (!user) return res.json({ errorCode: 21, message: 'Login failed, user not found' })
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (result === true) {
                        sess.email = req.body.email;
                        console.log(sess);
                        res.send(user)
                    } else {
                        res.json({ errorCode: 22, message: 'Not allowed' })
                        console.log("Not allowed")
                    }
                })
            })
            .catch(err => console.log(err))
    }
}

module.exports = user;