const mongoose = require('mongoose')
const Schema = mongoose.Schema


const friendSchema = new Schema({
    f_name: {
        type: String,
        required: true
    },
    s_name: {
        type: String,
        required: true
    }
    //,
    // date: {
    //     type: Date,
    //     required: true
    // },
    // user: {
    //     type: String,
    //     required: true
    // }
})

module.exports = mongoose.model('friends', friendSchema)