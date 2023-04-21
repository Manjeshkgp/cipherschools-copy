import userSchema from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

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
      succes: false,
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
      .json({ succes: false, message: "email already exists" });
  }
  if (userExistsByUsername) {
    return res
      .status(406)
      .json({ succes: false, message: "username already exists" });
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
    res.status(200).json({ succes: true, token: token });
  } catch (err) {
    console.log(err);
    res.status(505).json({
      succes: false,
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
      succes: false,
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
      .json({ succes: false, message: "user doesn't exists" });
  }
  const matched = await bcrypt.compareSync(body.password, user.password);
  if (!matched) {
    return res
      .status(406)
      .json({ succes: false, message: "password incorrect" });
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
    res.status(200).json({ succes: true, token: token });
  }
};

export const getUserData = async (req, res) => {
  if (!req.user) {
    res
      .status(405)
      .json({ succes: false, message: "request user not available" });
  }
  userSchema
    .findById(req.user._id)
    .lean()
    .then((user) => {
      if (!user) {
        res.status(406).json({ succes: false, message: "User Not Found" });
      } else {
        res.status(200).json({ ...user, password: "Will Not Show to Client" });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(505)
        .json({ succes: false, message: "Some Unknown Error", error: err });
    });
};
