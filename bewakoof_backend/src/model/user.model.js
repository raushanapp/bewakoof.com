const mongoose = require("mongoose");
const bcrypt =require("bcrypt");
const userSchema = new mongoose.Schema({
    fullName:{type:String, required:false},
    email:{type:String,required:true,unique:true},
    dateOfBirth :{type:Date,required:false,trim:true},
    gender :{type:String,require:false},
    password:{type:String,required:true},
    mobileNumber :{type :Number,required:false},
    role:{type:String,required:false,default:"user"},
    // role:[{type:String,required:false,default:"user"}],

},{
    timestamps:true,
    versionKey:false,
});


userSchema.pre("save", function(next){
   
    const hash = bcrypt.hashSync(this.password, 10);

    this.password =hash;
    next();

})

userSchema.methods.checkPassword = function (password) {

    return bcrypt.compareSync(password, this.password)
}


module.exports = mongoose.model("user",userSchema);