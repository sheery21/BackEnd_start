import express from "express";
import mongoose from "mongoose";
import UserModel from "./models/userSchema.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const URI =
  "mongodb+srv://sheharyarhussain832:admin321@cluster0.kam342p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(URI)
  .then(() => console.log("MONGODB CONNECT!"))
  .catch((err) => console.log("MONGODB ERROR ", err.message));

// CREATE USERS
app.post("/creatUser", async (req, res) => {
  console.log("body", req.body);

  try {
    const response = await UserModel.create(req.body);
    console.log("response", response);
    res.json({
      message: "User Created!",
      data: response,
    });
  } catch (error) {
    console.log("error", error.message);

    res.json({
      message: error.message || "someting went wrong!",
      data: "null",
    });
  }
});

// GET ALL USERS
app.get("/getAllUser", async (req, res) => {
  try {
    const userRes = await UserModel.find();

    res.json({
      message: "fech all user",
      data: userRes,
    });
  } catch (error) {
    req.json({
      message: error.message || "someting went wrong!",
      data: "null",
    });
  }
});

// UPDATE USERS
app.put("/updateUser/:id", async (req, res) => {
  const userid = req.params.id;
  const body = req.body;
  const updateResponse = await UserModel.findByIdAndUpdate(userid, body, {
    new: true,
  });

  res.json({
    message: "USER UPDATED!",
    data: updateResponse,
  });
});

// DELETED USER
app.delete("/deleteUser/:id", async (req, res) => {
  const userId = req.params.id;
  const deleteUser = await UserModel.findByIdAndDelete(userId)
  res.json({
    message: "USER UPDATED!",
    data: null,
  });
});

app.listen(PORT, () => console.log(`Server runing on http://localhost${PORT}`));
