const {Schema} = require('mongoose'),
cashSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const cashModel = mongoose.model('cash', cashSchema)

module.exports = cashModel