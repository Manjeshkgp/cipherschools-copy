import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    profile:{
        aboutMe:String,
        linkedin:String,
        github:String,
        facebook:String,
        twitter:String,
        instagram:String,
        website:String,
        education:String,
        currentWork:String
    },
    interests:Array,
    ciphers:[{points:Number,date:Date}],
    followers:Array,
    following:Array
})

export default Users = new mongoose.model("Users",userSchema);