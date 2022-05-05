const mongoose = require("mongoose");

const womenSchema  = new mongoose.Schema({
    category:{type:String,required: true },
    image:[{type:String}],
    name :{type:String,required:true},
    gender :{type:String,required:false},
    price:{type:String,required: true},
    canceledprice:{type:String,required:false},
    tribe :{type:String,required:false},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
},{
    timestamps:true,
    versionKey:false,
});

module.exports = mongoose.model("women",womenSchema);