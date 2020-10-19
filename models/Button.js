const mongoose = require('mongoose')
const Block = require('./Block')
const Schema = mongoose.Schema

const buttonBlock = new Schema ({
    id: {
        type: Number,
        unique: true
    },
    text: {
        type: string
    },
    pointer: {
        ref: 'Block',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('buttons', buttonBlock)
