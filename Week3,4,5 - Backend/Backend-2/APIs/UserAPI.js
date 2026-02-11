import exp from "express"
import {UserModel} from '../models/userModel.js'
import { hash,compare } from "bcryptjs"
import jwt from 'jsonwebtoken'
import {} from '../middlewares/verifyToken.js'
export const userApp=exp.Router()


//create User
userApp.post('/users',async(req,res)=>{
    //get newuser from req
    let newUser=req.body;
    //hash the password (becrypt js)
    let hashedPassword= await hash(newUser.password,12)
    //replace plain password with hashed password
    newUser.password = hashedPassword
    //create new user document
    let newuserDoc = new UserModel(newUser)
    //save in db
    await newuserDoc.save()
    //send res
    res.status(201).json({message:"user created"})
})

//
userApp.post('/auth',async(req,res)=>{
   //get user cred obj
   let userCred = req.body
   //check the username
   let userOfDB = await UserModel.findOne({username:userCred.username})
   //if user not found
   if(userOfDB===null){
      return res.status(404).json({message:"invalid username"})
   }
   //compare passwors
   let status = await compare(userCred.password,userOfDB.password)
   //if passwords not matched
   if(status === false){
      return res.status(404).json({message:"invalid password"})
   }
   //create signed token (10 secs "10" millisecs)
   let signedToken = jwt.sign({username:userCred.username},'abcdef',{expiresIn : 30 })

   //save token as HttpOnly Cookie
   res.cookie('token',signedToken,{
      httpOnly:true, // it is httpOnly
      secure:false, //(https --> true)
      sameSite:'lax' //(none, lax, max access)
   }) 
   //send token in res
   res.status(200).json({message:"login successful"})
})

//read user
userApp.get('/users',async(req,res)=>{
    //read users from db
    let users= await UserModel.find({},{username:1,_id:0,age:1,password:1})
    //
    res.status(200).json({message:"users",payload:users})
})

 //read user by object id
 userApp.get("/users/:id",async(req,res)=>{
    //get objectid from url param
    let objId=req.params.id;
    //fond user in DB
    let userObj=await UserModel.findById(objId)
    //send res
    res.status(200).json({message:"user",payload:userObj})
 })

 //update user
 userApp.put("/users/:id",async(req,res)=>{
    //get objectId from url params
    let objId=req.params.id;
    //get modified user from req
    let modifiedUser=req.body;
    //make update
    let latestUser=await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true,runValidators:true});
    //send res
    res.status(200).json({message:"user modified",payload:latestUser})
 })

 //Delete user
 userApp.delete("/users/:id",async(req,res)=>{
    //get objectId from url params
    let objId=req.params.id;
    //delete user by id
    let deletedUser=await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"user removed",payload:deletedUser})
 })

 //TEST route to convert to a protected route
 userApp.get('/test',(req,res)=>{
   res.json({message:"test route"})
 })