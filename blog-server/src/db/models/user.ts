// @ts-ignore
const mongoose = require('../index');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        // match: /^([a-z]|[0-9])\w+\@([a-z]|[0-9])\./i
    },
    phone: {
        type: Number,
        match: /^1[3456789]\d{9}$/
    },
    createAt: {
        type: Date,
    },
    lastLoginAt: {
        type: Date
    }
}, { collection: 'user', versionKey: false});

module.exports = mongoose.model('user', userSchema);
