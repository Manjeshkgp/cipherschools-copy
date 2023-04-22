import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    image:{
      url:{type:String,default:""},
      publicId:{type:String,default:""}
    },
    profile: {
      aboutMe: String,
      linkedin: String,
      github: String,
      facebook: String,
      twitter: String,
      instagram: String,
      website: String,
      education: String,
      currentWork: String,
    },
    interests: {type:[String],default:[]},
    ciphers: [{ points: Number, date: Date }],
    followers: Array,
    following: Array,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Users", userSchema);
