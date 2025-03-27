const mongoose = require('mongoose');

const MachineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Operational', 'Under Maintenance', 'Out of Service'],
        default: 'Operational'
    },
    location: {
        type: String,
        required: true
    },
    specifications: {
        type: String
    },
    lastServiced: {
        type: Date
    }
});

module.exports = mongoose.model('Machine', MachineSchema);