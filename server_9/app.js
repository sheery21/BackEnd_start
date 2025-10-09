import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import cors from 'cors'

const app = express();
const POST = process.env.POST || 5000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/creatUser", (req, res) => {
  let fileExist = fs.existsSync("user.txt");
  let body = { ...req.body, id: uuidv4() };
  if (fileExist) {
    let parsDate = JSON.parse(fs.readFileSync("user.txt", "utf-8"));
    parsDate.push(body);
    fs.writeFileSync("user.txt", JSON.stringify(parsDate));

    res.json({
      message: "user created!",
    });
  } else {
    let userArr = [];
    userArr.push(body);
    fs.writeFileSync("user.txt", JSON.stringify(userArr));

    res.json({
      message: "USER CREATED!",
    });
  }
});

app.get("/getAllUser", (req, res) => {
  let date = JSON.parse(fs.readFileSync("user.txt", "utf-8"));
  res.json( date );
});

app.put("/updateUser/:id", (req, res) => {
  let params = req.params.id;
  let allUser = JSON.parse(fs.readFileSync("user.txt", "utf-8"));

  const updateUser = allUser.map((user) => {
    if (params == user.id) {
      let updateObj = { ...user, ...req.body };
      return updateObj;
    } else {
      return user;
    }
  });
  fs.writeFileSync("user.txt", JSON.stringify(updateUser));
  res.json({
    message: "USER UPDATED!",
  });
});

app.delete("/userDelete/:id", (req, res) => {
  let params = req.params.id;
  let allUser = JSON.parse(fs.readFileSync("user.txt", "utf-8"));

  const userIndex = allUser.findIndex((user) => {
    if (params === user.id) {
      return user;
    }
  });

  if (userIndex == -1) {
    return res.json("user not found!");
  }
  allUser.splice(userIndex, 1);

  fs.writeFileSync("user.txt", JSON.stringify(allUser));

  res.json({
    message: "user deleted!",
  });
});

app.listen(POST, () =>
  console.log(`server running on http://localhost:${POST}`)
);
