import userSchema from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cloudinary from "../config/cloudinary.js";
import { writeFileSync } from "fs";
import { unlinkSync } from "fs";
import os from "os";
import path from "path";

dotenv.config();

export const signup = async (req, res) => {
  const body = req.body;
  // check if body is empty
  if (
    [body.name, body.email, body.username, body.password].includes(
      null || undefined || ""
    )
  ) {
    return res.status(403).json({
      success: false,
      message: "name, email, username and password can't be empty",
    });
  }
  // check if user already exists
  // const userExists = await userSchema.find({$or:[{email:body.email},{username:body.username}]}); maybe later
  const userExistsByEmail = await userSchema.findOne({
    email: body.email.toLowerCase(),
  });
  const userExistsByUsername = await userSchema.findOne({
    username: body.username.toLowerCase(),
  });
  if (userExistsByEmail) {
    return res
      .status(405)
      .json({ success: false, message: "email already exists" });
  }
  if (userExistsByUsername) {
    return res
      .status(406)
      .json({ success: false, message: "username already exists" });
  }
  const salt = bcrypt.genSaltSync(10);
  const hashedSaltedPassword = bcrypt.hashSync(body.password, salt);
  const bodyData = {
    name: body.name,
    email: body.email.toLowerCase(),
    username: body.username.toLowerCase(),
    password: hashedSaltedPassword,
  };
  try {
    const createUser = new userSchema(bodyData);
    const saveUser = await createUser.save();
    const token = jwt.sign(
      JSON.parse(
        JSON.stringify({
          _id: saveUser._id,
          name: saveUser.name,
          email: saveUser.email,
          username: saveUser.username,
        })
      ),
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );
    res.status(200).json({ success: true, token: token });
  } catch (err) {
    console.log(err);
    res.status(505).json({
      success: false,
      message: "Problem Occured During Adding Data to Database",
      error: err,
    });
  }
};

export const login = async (req, res) => {
  const body = req.body;
  // check if body is empty
  if ([body.email, body.password].includes(null || undefined || "")) {
    return res.status(403).json({
      success: false,
      message: "email and password can't be empty",
    });
  }
  // check if user exists or not
  const user = await userSchema.findOne({
    email: body.email.toLowerCase(),
  });
  if (!user) {
    return res
      .status(405)
      .json({ success: false, message: "user doesn't exists" });
  }
  const matched = await bcrypt.compareSync(body.password, user.password);
  if (!matched) {
    return res
      .status(406)
      .json({ success: false, message: "password incorrect" });
  } else {
    //jwt signin
    const token = jwt.sign(
      JSON.parse(
        JSON.stringify({
          _id: user._id,
          name: user.name,
          email: user.email,
          username: user.username,
        })
      ),
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );
    res.status(200).json({ success: true, token: token });
  }
};

export const getUserData = async (req, res) => {
  userSchema
    .findById(req.user._id)
    .lean()
    .then((user) => {
      if (!user) {
        res.status(405).json({ success: false, message: "User Not Found" });
      } else {
        res.status(200).json({ ...user, password: "Will Not Show to Client" });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(505)
        .json({ success: false, message: "Some Unknown Error", error: err });
    });
};

export const updateUserProfile = async (req, res) => {
  const body = req.body;
  const updates = {
    "profile.aboutMe": body.aboutMe || "",
    "profile.github": body.github || "",
    "profile.linkedin": body.linkedin || "",
    "profile.facebook": body.facebook || "",
    "profile.instagram": body.instagram || "",
    "profile.twitter": body.twitter || "",
    "profile.website": body.website || "",
    "profile.education": body.education || "",
    "profile.currentWork": body.currentWork || "",
  };
  try {
    const updatedUser = await userSchema
      .findByIdAndUpdate(req.user._id, updates, { new: true })
      .lean();
    if (!updatedUser) {
      res.status(405).json({
        success: false,
        message: "User Not Updated due to some Unknwon Reasons",
      });
    } else {
      res.status(200).json({
        success: true,
        user: { ...updatedUser, password: "Will not show to client" },
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(505)
      .json({ success: false, message: "Some Error Occured", error: err });
  }
};

export const updateInterests = async (req, res) => {
  console.log(interests);
  if (
    Array.isArray(interests) === false ||
    interests.every((interest) => typeof interest === "string") === false
  ) {
    return res.status(403).json({
      success: false,
      message: "interests must be an array of interests",
    });
  }
  try {
    const updatedUser = await userSchema
      .findByIdAndUpdate(req.user._id, { interests: interests }, { new: true })
      .lean();
    if (!updatedUser) {
      res.status(405).json({
        success: false,
        message: "User Interests Not Added due to Unknown Reasons",
      });
    } else {
      res.status(200).json({
        success: true,
        user: { ...updatedUser, password: "Will not show to client" },
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(505)
      .json({ success: false, message: "Some error occured", error: err });
  }
};

export const updatePassword = async (req, res) => {
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;
  const user = await userSchema.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ success: false, message: "User Not Found" });
  }
  const matched = await bcrypt.compareSync(oldPassword, user.password);
  if (!matched) {
    return res
      .status(420)
      .json({ success: false, message: "Old Password Incorrect" });
  }
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedSaltedPassword = bcrypt.hashSync(newPassword, salt);
    const updatedUser = await userSchema
      .findByIdAndUpdate(
        req.user._id,
        { password: hashedSaltedPassword },
        { new: true }
      )
      .lean();
    if (!updatedUser) {
      res.status(405).json({
        success: false,
        message: "Password Not Updated Due to some Unknown Reasons",
      });
    } else {
      res.status(200).json({
        success: true,
        user: { ...updatedUser, password: "Will not show to client" },
      });
    }
  } catch (err) {
    res
      .status(505)
      .json({ success: false, message: "Some Error Occured", error: err });
  }
};

export const addImage = async (req, res) => {
  if (req.file === undefined || req.file === null) {
    return res
      .status(403)
      .json({ success: false, message: "No file selected" });
  }
  // create a unique file name
  const tmpPath = path.join(
    os.tmpdir(),
    `${Date.now()}-${req.file.originalname}`
  );

  // write the buffer data to the temporary file
  writeFileSync(tmpPath, req.file.buffer);

  cloudinary.uploader.upload(tmpPath, async function (err, result) {
    // delete the temporary file from the server
    unlinkSync(tmpPath);
    if (err) {
      console.log(err);
      return res.status(405).json({
        success: false,
        message: "Some Error Occured during Uploading",
        error: err,
      });
    }
    const imageUrl = result.secure_url;
    const publicId = result.public_id;
    try {
      const user = await userSchema.findByIdAndUpdate(
        req.user._id,
        { "image.url": imageUrl, "image.publicId": publicId },
        { new: false }
      );
      if (["", null, undefined].includes(user.image.publicId)) {
        return res.status(200).json({ success: true, url: imageUrl });
      } else {
        cloudinary.uploader.destroy(
          user.image.publicId,
          function (err3, result) {
            if (err3) {
              console.log(err3);
              return res.status(406).json({
                success: false,
                message: "Image Changed, but previous image not deleted",
                error: err3,
              });
            }
            res.status(200).json({ success: true, url: imageUrl });
          }
        );
      }
    } catch (err2) {
      console.log(err2);
      res
        .status(404)
        .json({ success: false, message: "Some Error Occured", error: err2 });
    }
  });
};

export const followUser = async (req, res) => {
  const { username } = req.query;
  if (typeof username !== "string") {
    return res
      .status(404)
      .json({ success: false, message: "Username Query is Not a String" });
  }
  if (
    !username ||
    username === "" ||
    username === null ||
    username === undefined
  ) {
    return res.status(403).json({ success: false, message: "No Username" });
  }
  if (username === req.user.username) {
    return res
      .status(406)
      .json({ success: false, message: "You can't follow yourself" });
  }
  try {
    const user = await userSchema
      .findOneAndUpdate(
        { username: username },
        { $addToSet: { followers: req.user.username } },
        { new: true }
      )
      .lean();
    const myself = await userSchema
      .findOneAndUpdate(
        { username: req.user.username },
        { $addToSet: { following: username } },
        { new: true }
      )
      .lean();
    res.status(200).json({
      success: true,
      hisFollowers: user.followers,
      youFollowing: myself.following,
    });
  } catch (err) {
    console.log(err);
    res
      .status(405)
      .json({ success: false, message: "Some Error Occured", error: err });
  }
};

export const unFollowUser = async (req, res) => {
  const { username } = req.query;
  if (typeof username !== "string") {
    return res
      .status(404)
      .json({ success: false, message: "Username Query is Not a String" });
  }
  if (
    !username ||
    username === "" ||
    username === null ||
    username === undefined
  ) {
    return res.status(403).json({ success: false, message: "No Username" });
  }
  if (username === req.user.username) {
    return res
      .status(406)
      .json({ success: false, message: "You can't follow yourself" });
  }
  try {
    const user = await userSchema
      .findOneAndUpdate(
        { username: username },
        { $pull: { followers: req.user.username } },
        { new: true }
      )
      .lean();
    const myself = await userSchema
      .findOneAndUpdate(
        { username: req.user.username },
        { $pull: { following: username } },
        { new: true }
      )
      .lean();
    res.status(200).json({
      success: true,
      hisFollowers: user.followers,
      youFollowing: myself.following,
    });
  } catch (err) {
    console.log(err);
    res
      .status(405)
      .json({ success: false, message: "Some Error Occured", error: err });
  }
};

export const getFollowers = async (req, res) => {
  const { username, page } = req.query;
  if (typeof username !== "string" || username === "") {
    return res.status(403).json({
      success: false,
      message: "Query Username Must be a String & can't be empty",
    });
  }
  if (isNaN(Number(page)) || Number(page) < 1) {
    return res.status(403).json({
      success: false,
      message: "Query Page Must be a Number & can't be less than 1",
    });
  }
  const theUser = await userSchema.findOne({ username: username }).lean();
  const allFollowersUsernames = theUser.followers;
  try {
    const limit = 10;
    const skip = (page - 1) * limit;
    const followersCount = await userSchema.countDocuments({
      username: { $in: allFollowersUsernames },
    });
    const followers = await userSchema
      .find({ username: { $in: allFollowersUsernames } })
      .skip(skip)
      .limit(limit)
      .select([
        "name",
        "username",
        "image",
        "profile",
        "followers",
        "following",
      ]);
    res
      .status(200)
      .json({ success: true, followers: followers, count: followersCount });
  } catch (err) {
    console.log(err);
    res
      .status(505)
      .json({ success: false, message: "Some Error Occured", error: err });
  }
};

export const getFollowing = async (req, res) => {
  const { username, page } = req.query;
  if (typeof username !== "string" || username === "") {
    return res.status(403).json({
      success: false,
      message: "Query Username Must be a String & can't be empty",
    });
  }
  if (isNaN(Number(page)) || Number(page) < 1) {
    return res.status(403).json({
      success: false,
      message: "Query Page Must be a Number & can't be less than 1",
    });
  }
  const theUser = await userSchema.findOne({ username: username }).lean();
  const allFollowingUsernames = theUser.following;
  try {
    const limit = 10;
    const skip = (page - 1) * limit;
    const followingCount = await userSchema.countDocuments({
      username: { $in: allFollowingUsernames },
    });
    const following = await userSchema
      .find({ username: { $in: allFollowingUsernames } })
      .skip(skip)
      .limit(limit)
      .select([
        "name",
        "username",
        "image",
        "profile",
        "followers",
        "following",
      ]);
    res
      .status(200)
      .json({ success: true, following: following, count: followingCount });
  } catch (err) {
    console.log(err);
    res
      .status(505)
      .json({ success: false, message: "Some Error Occured", error: err });
  }
};

export const getUser = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await userSchema
      .findOne({ username: username })
      .select({ password: 0, "image.publicId": 0 })
      .select({ _id: 0 })
      .lean();
    res.status(200).json({ success: true, user: user });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Some Error Occured", error: err });
  }
};

export const searchUsers = async (req, res) => {
  const { username } = req.query;
  if (typeof username !== "string" || username === "") {
    return res.status(405).json({
      success: false,
      message: "Username Query must be String and can't be empty",
    });
  }
  try {
    const users = await userSchema
      .find({
        $or: [
          { username: { $regex: username, $options: "i" } },
          { name: { $regex: username, $options: "i" } },
        ],
      })
      .select([
        "-password",
        "-_id",
        "-profile",
        "-interests",
        "-email",
        "-followers",
        "-following",
        "-ciphers",
      ])
      .limit(10)
      .lean();
    res.status(200).json({ success: false, users: users });
  } catch (err) {
    console.log(err);
    res
      .status(505)
      .json({ success: false, message: "Some Error Occured", error: err });
  }
};

export const updateCiphers = async (req, res) => {
  const today = new Date();
  today.setHours(6, 0, 0, 0); // Set the time to 6am to get today's date(not time) since we are 5:30 hrs ahead GMT

  try {
    let user = await userSchema
      .findOneAndUpdate(
        { _id: req.user._id, ciphers: { $elemMatch: { date: today } } },
        { $inc: { "ciphers.$.points": 1 } },
        { new: true }
      )
      .select(["username", "ciphers"])
      .lean();

    if (!user) {
      user = await userSchema
        .findByIdAndUpdate(
          req.user._id,
          { $addToSet: { ciphers: { points: 1, date: today } } },
          { new: true }
        )
        .select(["username", "ciphers"])
        .lean();
    }
    res.status(200).json({ success: true, user: user });
  } catch (err) {
    res
      .status(405)
      .json({ success: false, message: "Some Error Occured", error: err });
  }
};

export const getCiphers = async (req, res) => {
  const { username } = req.query;
  try {
  const user = await userSchema
    .findOne({ username: username })
    .select(["ciphers.points", "ciphers.date"])
    .lean();
  const ciphers = user.ciphers.sort((a, b) => a.date - b.date);
  const countCiphers = ciphers.length;

  const cipherMap = new Map();
  for (let i = 0; i < countCiphers; i++) {
    const cipher = ciphers[i];
    cipherMap.set(cipher.date.toISOString().slice(0, 10), cipher.points);
  }

  const last365days = [];
  const today = new Date();
  today.setHours(6, 0, 0, 0);
  for (let i = 0; i < 365; i++) {
    const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
    const dateStr = date.toISOString().slice(0, 10);
    const points = cipherMap.get(dateStr) || 0;
    last365days.push({ points, date: dateStr });
  }
  res.status(200).json({ success: true, ciphers: last365days });
  } catch (err) {
    res.status(405).json({success:false,message:"Some Error Occured",error:err})
  }
};
