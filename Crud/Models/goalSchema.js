const mongoose = require ('mongoose')

const goalModel = new mongoose.Schema({
    fullname:{
        type:String,
        required:[true, 'please add a text value']
    },
    email:{
        type:String,
        required:[true, 'please add a text value']
    },
    address:{
        type:String,
        required:[true, 'please add a text value']
    },
    mobile:{
        type: Number,
        required:[true, 'please add a text value']
    },
    age:{
        type: Number,
        min: 1,
        max: 70,
        // required:[true, 'please add a text value']
    }
},{
    timestamps:true
});
    
module.exports = mongoose.model('employee', goalModel)