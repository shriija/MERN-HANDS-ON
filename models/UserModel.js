import { Schema,model } from "mongoose";
//create cart schema
const cartSchema = new Schema({
    product : {
        type : Schema.Types.ObjectId, //schematype
        ref: 'product' //name of the productModel
    },
    quantity : {
        type: Number,
        default:1,
        min:1
    }
})

const userSchema = new Schema({
    name:{
        type:String,
        required: [true, "Name is required"]//required, min, minlength,max,maxlength are all validators in mongoose and hence we use a message
    },
    email:{
        type:String,
        required: [true, "Email Required"],
        unique : [true, "dupliccate user"]//unique is not a validator but a helper but works as a index improving search. (since its not a validator we cant customise a message)
    },
    password:{
        type:String,
        required: [true, "Password Required"]
    },
    cart:{
        type:[cartSchema], //product id goes into the cart
    },
},{
    strict:"throw",
    timestamps : true
});

export const UserModel = model("user",userSchema)