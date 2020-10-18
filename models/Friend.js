const mongoose = require('mongoose')
const Schema = mongoose.Schema


const friendSchema = new Schema({
    friend_id:{
        type: Number,
        required: true
    },
    f_name: {
        type: String,
        required: true
    },
    s_name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    user: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('friends', friendSchema)