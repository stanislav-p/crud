var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var CompanySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    earnings: {
        type: Number,
        required: true
    },
    parent: {
        // type: ObjectId,
        type: String
    },
    children: {
        type: [{
            name: String,
            earnings: Number
        }]
    }
});


module.exports = mongoose.model('Company', CompanySchema);




