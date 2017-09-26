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
    }//,
    //mainCompany: {
    //    type: ObjectId,
    //    default: '59c9782531824b08ec25fa7e'
    //}
});

module.exports = mongoose.model('Company', CompanySchema);


