const mongoose =require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://bewakoof:bewakoof@cluster0.claw3.mongodb.net/bewakoof_data?retryWrites=true&w=majority")
}