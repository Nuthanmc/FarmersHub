const mongoose = require('mongoose');
const Schema=mongoose.Schema

const warehouseSchema = new Schema({
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    location: String,
    title: {
        type: String,
        required: true
    },
    image: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
    },
    goodsStored: {
        type: String,
        required: true
    },
    storageCapacity: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        max: 5000
    },
    availability: {
        type: String,
        default: true,
      },
    author:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
},{ timestamps: true });

module.exports = mongoose.model('Warehouse', warehouseSchema);
