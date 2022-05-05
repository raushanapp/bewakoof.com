
const express = require('express');
const authenticate =require("../middleWare/authentication")
const Product =require("../model/men.models")
const authorise = require("../middleWare/authorise")
const router = express.Router();

router.post("",authenticate,async(req,res)=>{
    req.body.userId =req.user._id

    try{
        const product = await Product.create(req.body);

        return res.status(201).send({product:product});

    }catch(err){
        return res.status(500).send({message: err.message});
    }
});


router.patch("/:id",authenticate, authorise(["admin","seller","user"]), async(req,res)=>{

    req.body.userId = req.user._id;
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});

        res.status(200).send({product:product}) 

    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
})

router.delete("/:id",authenticate, authorise(["admin","seller","user"]), async(req,res)=>{

    req.body.userId = req.user._id;
    try{
        const product = await Product.findByIdAndDelete(req.params.id);

        res.status(200).send({product:product}) 

    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
})


router.get("",async(req,res)=>{

    try{
        const product = await Product.find().lean().exec();

        return res.status(201).send({product:product});

    }catch(err){
        return res.status(500).send({message: err.message});
    }
})

module.exports =router;