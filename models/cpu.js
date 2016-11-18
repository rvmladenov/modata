var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    id: {type: String, required: true},
    percentUsage: { type : Number, default: 0 },

    user: {type: Schema.Types.ObjectId, ref: 'User'}});

module.exports = mongoose.model('Cpu', schema);