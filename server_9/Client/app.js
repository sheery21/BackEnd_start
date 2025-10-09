
const creatUser = async () => {
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  const userObj = {
    username,
    email,
    password,
  }
  try {
    const res = await fetch("http://localhost:5000/creatUser",{
        method:"POST",
        headers:{
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(userObj)
    });
   const data = await res.json();
    console.log("User created:", data);
    
  } catch (error) {
    console.log(error.message);
  }
};

const getApi = async () => {
  try {
    const res = await fetch("http://localhost:5000/getAllUser");
    let users = await res.json();
    console.log("api calling user", users);
  } catch (error) {
    console.log(error.message);
  }
};
getApi();
