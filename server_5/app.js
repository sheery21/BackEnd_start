import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/createuser", (req, res) => {
  let fileExist = fs.existsSync("user.txt");
  // console.log('fileExist' , fs.existsSync('user.txt'));
  if (fileExist) {
    // append
    let getData = fs.readFileSync("user.txt", "utf-8");
    let parseData = JSON.parse(getData);
    parseData.push(req.body);
    console.log("parseData", parseData);
    fs.writeFileSync("user.txt", JSON.stringify(parseData));
  } else {
    // create - write fill
    let userArr = [];
    userArr.push(req.body);
    fs.writeFileSync("user.txt", JSON.stringify(userArr));
  }
  res.send("User Create Successfully");
});

app.get("/getuser", (req, res) => {
  res.send(userArr);
});

app.post("/updateuser", (req, res) => {
  res.send("User Updated Successfully");
});

app.post("/deleteuser", (req, res) => {
  res.send("User Deleted Successfully");
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost${PORT}`)
);
