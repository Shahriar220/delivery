const mongoose=require('mongoose')

const pizzaSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:100
    },
    varients:[],
    prices:[],
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        maxLength:200
    },
    time : { type : Date, default: Date.now }
})

const pizzaModel=mongoose.model('pizzas',pizzaSchema)
module.exports={pizzaModel}