var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    pid: {type: String, required: true},
    name: {type: String, required: true},
    res: {type: Number, required: true, default: 0},
    mem: {type: Number, required: true, default: 0},
    time: { type : Date, default: Date.now },
    command: { type : String, required: true, default: '' },
    user: {type: String, require: true}
});

module.exports = mongoose.model('Task', schema);