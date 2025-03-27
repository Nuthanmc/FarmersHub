const mongoose = require('mongoose');

const labourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image:{type:String},
  phone: { type: String, required: true, unique: true },
  skill: { type: String, required: true },
  availability: { type: Boolean, default: true },
  location: {type:String},
  geometry:{
    type: {
    type: String,
    enum: ['Point'],
},
coordinates: {
    type: [Number],
}
}
});

module.exports = mongoose.model('Labour', labourSchema);
