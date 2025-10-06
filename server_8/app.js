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
    console.log("second user", usersData);
    fs.writeFileSync("user.txt", JSON.stringify(usersData));
    response.json({
      message: "user created!",
    });
  } else {
    const userArr = [];
    userArr.push(body);
     
    fs.writeFileSync("user.txt", JSON.stringify(body));
    res.json({ message: "user created!" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
