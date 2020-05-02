const mongoose = require('mongoose');

//Creating schema for ticket
const ticketSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    isOpen: {
        type: Boolean,
        default: false
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    date: {
        type : Date,
        default : Date.now
    }
}, {
    timestamps: true
});

const Ticket = mongoose.model('Ticket', ticketSchema);

//Exporting module
module.exports = Ticket;