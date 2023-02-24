const mongoose = require('mongoose');

const strongPasswordDataScema = new mongoose.Schema({
    input : {
        type: String
    },
    output : {
        type: String
    }
},{
    timestamps : true
}
);

const StrongPassword = mongoose.model('StrongPassword',strongPasswordDataScema);
module.exports = StrongPassword;