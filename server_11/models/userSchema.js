import mongoose from "mongoose";

const userSchama = new mongoose.Schema({
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const UserModel = mongoose.model("Users", userSchama);

export default UserModel;
