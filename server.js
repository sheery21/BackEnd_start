import fs from "fs";
import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {

  // switch(req.url){
  //     case "/" :
  //     res.end('SERVER Up');
  //     break;

  //      case "/createUser":
  //     res.end("user created!");
  //     break;

  //   case "/getUser":
  //     res.end("user fetch!");
  //     break;
  // }

  if (req.url == "/") {
    res.end("SERVER Up");
  } else if (req.url == "/createuser") {
    const userObj = {
      email: " sherry@gmail.com",
      password: "password",
    };
    fs.writeFileSync("userObj.txt", JSON.stringify(userObj));
    res.end("user created!");
  } else if (req.url == "/getUser") {
    const data = fs.readFileSync("userObj.txt", "utf-8");
    const user = JSON.parse(data)
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(user))
  } else if( req.url == "/updateUser"){
     res.end("user updated!");
  }else if (req.url == "/deleteuser") {
    res.end("user deleted!");
  }else{
    res.end('not found')
  }
});
server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
