import express from "express";
import mongoose from "mongoose";
import UserModel from "./models/userSchema.js";

const app = express();
const PORT = process.env.PORT || 5000;

const URI = `mongodb+srv://admin321:admin123@cluster0.e6gofjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB Connection err", error.message));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/ceratUser", async (req, res) => {
  const body = req.body;
  try {
    const user = await UserModel.create(body);

    res.json({
      message: "USER CREATED!",
      data: user,
    });
  } catch (error) {
    res.json({
      message: error.message,
      data: null,
    });
  }
});

app.get("/getUser", async (req, res) => {
  const findUser = req.body;
  try {
    const user = await UserModel.find(findUser);

    res.json({
      message: "USER GET!",
      data: user,
    });
  } catch (error) {
    res.json({
      message: error.message,
      data: null,
    });
  }
});

app.put("/updateUser/:id", async (req, res) => {
  const userid = req.params.id;
  const body = req.body;
  try {
    const user = await UserModel.findByIdAndUpdate(userid, body,{new : true});
    res.json({
      message: "USER UPDATED!",
      data: user,
    });
  } catch (error) {
    res.json({
      message: error.message,
      data: null,
    });
  }
});
app.delete("/deleteUser/:id", async (req, res) => {
  const userid = req.params.id;
  const body = req.body;
  try {
    const user = await UserModel.deleteOne(userid, body,{new : true});
    res.json({
      message: "USER UPDATED!",
      data: user,
    });
  } catch (error) {
    res.json({
      message: error.message,
      data: null,
    });
  }
});

app.listen(PORT, () => console.log(`server runing on http://:${PORT}`));
