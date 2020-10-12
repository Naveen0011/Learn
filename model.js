const mongoose = require('mongoose');
var schema = mongoose.Schema;

var getDetails = new schema({
    guestSign : {
        type : schema.Types.Mixed,
        required : true
    },
    message : {
        type : schema.Types.Mixed,
        requuired : true
    }
 }
);

const Signature  = mongoose.model("Signature",getDetails);

module.exports = Signature;