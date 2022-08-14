const {Schema, model} = require('mongoose');

// to create the schema
const forgetSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    otp: {
        type: String,
        required: true,
    },
})

module.exports = model('Forget', forgetSchema);