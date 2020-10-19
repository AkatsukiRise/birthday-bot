const mongoose = require('mongoose')
const Schema = mongoose.Schema

const binbBlock = new Schema ({
    id_block: {
        ref: 'Block',
        type: Schema.Types.ObjectId
    },
    id_button: {
        ref: 'buttons',
        type: Schema.Types.ObjectId
    },
})

module.exports = mongoose.model('binbBlocks', binbBlock)