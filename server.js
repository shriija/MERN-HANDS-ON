import exp from 'express';
import {connect} from 'mongoose'
import {productApp} from './APIs/productAPI.js'
import {userApp} from './APIs/userAPI.js'
//Create HTTP Server
const app = exp()
const port = 4000
//Connect to MongoDB Database
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/ecommdb');
        console.log("Db is connected")
        app.listen(port,()=>console.log('HTTP server listening on port 4000....'))
    }
    catch(err)
    {
        console.log("error in connectivity",err)
    }
        
}

connectDB()
//use body parser middleware
app.use(exp.json())
//forward req to specific APIs
app.use('/user-api',userApp)
app.use('/product-api',productApp)

function errorHandler(err,req,res,next){
    res.json({message:"error", reason:err.message})
}
app.use(errorHandler)

//way 2
app.use((err,req,res,next)=>{
    res.status(500).json({message:"error", reason: err.reason})
})