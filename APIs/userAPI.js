import exp from "express"
import {UserModel} from '../models/UserModel.js'
import { ProductModel } from "../models/ProductModel.js"
import {hash} from 'bcryptjs'
import { Types } from "mongoose"
export const userApp = exp.Router()

let users = []
//Create User
userApp.post('/users',async(req,res)=>{
    let newUser=req.body;
   //run validator
   await new UserModel(newUser).validate()
   
    //hash the password (becrypt js)
    let hashedPassword= await hash(newUser.password,12)
    //replace plain password with hashed password
    newUser.password = hashedPassword
    //create new user document
    let newuserDoc = new UserModel(newUser)
    //save in db
    await newuserDoc.save({ValidateBeforeSave: false})
    //send res
    res.status(201).json({message:"user created"})
})

//read user
userApp.get('/users/:uid',async(req,res)=>{
    let {uid} = req.params
   //read users from db
    let users= await UserModel.findById(uid).populate("cart.product","name price brand") // to pick the ref of nested references - populate
    //
    res.status(200).json({message:"users",payload:users})
})

/*add product to cart
userApp.put('/user-cart/user-id/:uid/product-id/:pid',async(req,res)=>{
   //read uid and pid from url param
   let {uid,pid} = req.params //{uid:"",pid:""} object with two prama - uid, pid
   console.log("pid",pid)
   console.log("uid",uid)
   //check user
   let user = await UserModel.findById(uid)
   if(!user){
      return res.status(401).json({message:"User not found"})
   }
   //check product
   let product = await ProductModel.findById(pid)
   if(!product){
      return res.status(401).json({message:"Product not found"})
   }
   //check if product exists in cart or not
   let cartItem = user.cart.find(
    item => item.product.id === pid
  )
  if(cartItem){
   cartItem.quantity += 1
  } else{
   //perform the update (pushing product id into the cart of user doc)
   let modifiedUser = await UserModel.findByIdAndUpdate(
      uid,
      {$push:{cart:{product:pid}}}, //cart = [{product:""}{product:""]
      {new: true}
   ).populate("cart.product")}
   //res
   res.status(200).json({message:"products",payload:modifiedUser})
})*/

//productCount
userApp.put('/user-cart/user-id/:uid/product-id/:pid',async(req,res)=>{
   let {uid,pid} = req.params //{uid:"",pid:""} object with two prama - uid, pid
   console.log("pid",pid)
   console.log("uid",uid)
   //check user
   let user = await UserModel.findById(uid)
   if(!user){
      return res.status(401).json({message:"User not found"})
   }
   //check product
   let product = await ProductModel.findById(pid)
   if(!product){
      return res.status(401).json({message:"Product not found"})
   }
   //check if product exists or not
   let cartItem = user.cart.find(
    item => item.product.toString() === pid
  )
  if(cartItem){
   cartItem.quantity += 1
  }
  if(!cartItem){
   user.cart.push({
      product:pid,
      quantity:1
   })
  }

  await user.save()
   //res
   res.status(200).json({message:"product added",payloader:user.count})
})

//
userApp.get("/compare/:pid", async(req,res)=>{
   let productId =new Types.ObjectId(req.params.pid)
   let prod = await ProductModel.findById(productId)
   //strict comparision compares the type too 
   if(productId===prod._id){
      console.log("eq")
   }else{
      console.log("no")
   }
   //or
   if(prod._id.equals(productId)){
      console.log("eq")
   } else {
      console.log("no")
   }
})