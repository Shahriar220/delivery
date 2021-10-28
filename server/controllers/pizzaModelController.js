const express=require('express')
let router=express.Router()

const {pizzaModel}=require('../models/Pizzas')

router.route('/addPizza').post(async(req,res)=>{
    try{
        const newPizza=new pizzaModel(req.body)
        const result=await newPizza.save()
        res.status(200).json(result)
    }catch(err){
        res.status(400).json({message:'Something went wrong'})
    }
})
router.route('/getAll').get(async(req,res)=>{
    try{
        const allPizza=await pizzaModel.find()
        res.status(200).json(allPizza)
    }catch(err){
        res.status(400).json({message:'Something went wrong'})
    }
})
module.exports=router