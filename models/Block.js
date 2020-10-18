
const Schema = mongoose.Schema

const schemaBlock = new Schema ({
    number: {
        type: string,
        required: true,
        unique: true
    },
    text: {
        type: string
    }
})

module.exports = mongoose.model('Block', schemaBlock)