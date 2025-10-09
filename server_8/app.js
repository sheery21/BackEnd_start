import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/creatUser", (req, res) => {
  const fileExist = fs.existsSync("user.txt");
  const body = { ...req.body, id: uuidv4() };
  if (fileExist) {
    const usersData = JSON.parse(fs.readFileSync("user.txt", "utf-8"));
    usersData.push(body);
    fs.writeFileSync("user.txt", JSON.stringify(usersData));
    res.json({
      message: "user created!",
    });
  } else {
    const userArr = [];
    userArr.push(body);

    fs.writeFileSync("user.txt", JSON.stringify(userArr));
    res.json({ message: "user created!" });
  }
});

app.get("/getUser", (req, res) => {
  let data = JSON.parse(fs.readFileSync("user.txt", "utf-8"));
  res.json({ data });
});

app.put("/updateUser/:id", (req, res) => {
  let userId = req.params.id;
  let allUser = JSON.parse(fs.readFileSync("user.txt", "utf-8"));

  const updateUsers = allUser.map((obj) => {
    if (obj.id == userId) {
      const updateObj = { ...obj, ...req.body };
      return updateObj;
    } else {
      return obj;
    }
  });
  fs.writeFileSync("user.txt", JSON.stringify(updateUsers));
  res.json({
    message: "user updated!",
  });
});

app.delete("/userDelete/:id", (req, res) => {
  let userId = req.params.id;
  let parseData = JSON.parse(fs.readFileSync('user.txt' , 'utf-8'))
  console.log(parseData , 'usersData');
  const indexNumber = parseData.findIndex( (user ) =>{
    console.log(user.id , "user");

    if(userId === user.id){
      return user
    }
  })
  parseData.splice(indexNumber , 1)
  fs.writeFileSync('user.txt' , JSON.stringify(parseData))
  res.json({
     message: "user Deleted!",
  })
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
