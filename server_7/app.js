import express from "express";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { log } from "console";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/createuser", (req, res) => {
  let fileExist = fs.existsSync("user.txt");

  if (fileExist) {
    let getData = fs.readFileSync("user.txt", "utf-8");
    let parseData = JSON.parse(getData);
    parseData.push({ ...req.body, id: uuidv4() });
    fs.writeFileSync("user.txt", JSON.stringify(parseData));
  } else {
    let userArr = [];
    userArr.push({ ...req.body, id: uuidv4() });
    fs.writeFileSync("user.txt ", JSON.stringify(userArr));
  }

  res.send("User Cerated Successfully");
});
app.get("/getuser", (req, res) => {
  let user = fs.readFileSync("user.txt", "utf-8");
  let parseData = JSON.parse(user);
  res.send(parseData);
});
app.post("/updateuser/:id", (req, res) => {
    let params = req.params

    let getData = fs.readFileSync('user.txt' , 'utf-8')
    let parse = JSON.parse(getData)
    const newArr = parse.map(user =>{
      console.log('user' , user);
        if(user.id === params.id){
            return{ ...user, ...req.body };
        }else{
            return user
        }
        
    })
    console.log(newArr , 'newArr');
    
    fs.writeFileSync('user.txt', JSON.stringify(newArr))
  res.send("User Updated Successfully");
});
app.post("/deleteuser", (req, res) => {
  res.send("User Deleted Successfully");
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost${PORT}`)
);
