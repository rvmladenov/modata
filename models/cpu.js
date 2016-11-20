var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: String, required: true},
    percentUsage: { type : Number, default: 0 }});

module.exports = mongoose.model('Cpu', schema);