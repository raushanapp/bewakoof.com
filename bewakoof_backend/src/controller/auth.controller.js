
const User = require("../model/user.model")
const jwt = require("jsonwebtoken");
require('dotenv').config()
const generateToken = (user) =>{
//    console.log(process.env.SECRET_KEY)
    return jwt.sign({ user}, process.env.SECRET_KEY)

}

const register = async (req,res) =>{

    try{

        let  user = await User.findOne({mobileNumber:req.body.mobileNumber}).lean().exec()

        if (user){
            
            return res.status(400).send("User already exists plesae choose different mobile number ");
        }
        user = await User.create(req.body)

        const token = generateToken(user)
       return res.status(200).send({user,token});
    }catch(err){
        res.status(500).send({message:err.message});
    }
}


const login = async (req,res) =>{

    try{
        let user = await User.findOne({mobileNumber:req.body.mobileNumber})

        if (!user) return res.status(400).send("Wrong mobile number and password please check again");
        //    console.log("check",user)  
        const match =  user.checkPassword(req.body.password);
        if (!match) return res.status(400).send(" Wrong mobile number and password please check again");

        const token = generateToken(user)
        return res.status(200).send({user,token});

       
    }catch(err){
        res.status(500).send({message:err.message});
    }
}

const login_mobile= async(req,res) =>{
    try{
        let user = await User.findOne({mobileNumber:req.body.mobileNumber}).lean().exec();

        if (!user) return res.status(400).send("Wrong mobile number and password please check again");
        
        // const match =  user.checkPassword(req.body.password);
        // if (!match) return res.status(400).send(" Wrong mobile number and password please check again");

        const token = generateToken(user)
        return res.status(200).send({user,token});

       
    }catch(err){
        res.status(500).send({message:err.message});
    }
}

module.exports ={register,login,login_mobile,generateToken};