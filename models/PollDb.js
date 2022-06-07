const {model,Schema} = require('mongoose');

const pollDbSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    totalVote:{
        type:Number,
        default:0
    },
    options:{
        type:[{
            name:String,
            vote:Number
        }]
    }

});
const pollDb = model('pollDb',pollDbSchema);
module.exports = pollDb;
