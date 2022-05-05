const express =require("express");
const User = require("../model/user.model");
const authenticate = require("../middleWare/authentication")
const router = express.Router();

router.post("/profile",authenticate,async(req,res)=>{

    try{
        let user = req.user;
        user.fullName = req.body.fullnmae;
        user.dateOfBirth = req.body.dateOfBirth;
        user.gender=req.body.gender;
        return res.send({user:user})

    }catch(err) {
        return res.status(500).send({message:err.message})
    }
})

module.exports = router;