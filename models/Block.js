
const Schema = mongoose.Schema

const schemaBlock = new Schema ({
    id: {
        type: string,
        required: true,
        unique: true
    },
    text: {
        type: string
    }
})

module.exports = mongoose.model('Block', schemaBlock)