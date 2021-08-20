const mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
}, { collection: 'users' })

userSchema.pre('save', function (next) {
    var user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10);
        next();
    }
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});
// UsersSchema.pre('findByIdAndUpdate', async function () {
//     this._update.password = await bcrypt.hash(this._update.password, 10)
// })
// userSchema.pre('findByIdAndUpdate', function (next) {
//     var user = this;
//     bcrypt.hash(user.password, 10, function (err, hash) {
//         if (err) {
//             return next(err);
//         }
//         user.password = hash;
//         next();
//     })
// });

mongoose.model('user', userSchema);