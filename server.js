const express=require('express')
const mongoose=require('mongoose')
const pizzas=require('./server/controllers/pizzaModelController')
const app=express()


mongoose
.connect("mongodb://localhost:27017/pizza")
.then(()=>console.log("connected to mongodb"))
.catch((err)=>console.log(err))

app.use(express.json())
app.use("/api/admin",pizzas)

const port=process.env.PORT||8001
app.listen(port,()=>{
    console.log(`listening on ${port}`)
})