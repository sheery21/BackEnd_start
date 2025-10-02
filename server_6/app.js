import express from "express";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/createuser", (req, res) => {
  console.log(req.body);
  let fileExist = fs.existsSync("user.txt");
  console.log("fileExist", fileExist);

  if (fileExist) {
    // append
    let getData = fs.readFileSync("user.txt", "utf-8");
    let parseData = JSON.parse(getData);
    parseData.push({ ...req.body, id: uuidv4() });
    fs.writeFileSync("user.txt", JSON.stringify(parseData));
  } else {
    // create - write fill
    let userArr = [];
    userArr.push({ ...req.body, id: uuidv4() });
    fs.writeFileSync("user.txt", JSON.stringify(userArr));
  }
  res.send("User Created Successfully");
});
app.get("/getalluser", (req, res) => {
  const user = fs.readFileSync("user.txt", "utf-8");
  const parsedata = JSON.parse(user);
  res.send(parsedata);
});
app.post("/updateuser/:id", (req, res) => {
  const params = req.params
  const getdata = fs.readFileSync('user.txt', 'utf-8')
  const parses = JSON.parse(getdata)
  const newArr = parses.map(user =>{
    console.log('user' , user);

    if(user.id === params.id){
      return req.body
    }else{
      return user
    }
   fs.writeFileSync('user.txt', newArr)
  })
console.log('newArr', newArr);

  res.send("User Updeted Successfully");
});
app.post("/deleteuser", (req, res) => {
  res.send("User deleted Successfully");
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost${PORT}`)
);
