import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json())
app.use(express.urlencoded({extended :true}))

let userArr = [];

app.post('/createuser',(req, res) =>{
    userArr.push(req.body)
    res.send('User Create Successfully')

})
app.get('/getuser', (req, res) =>{
    
    res.send(userArr)
});

app.post('/deleteuser',(req, res) =>{
    res.send('User Deleted Successfully')
})
app.post('/updateuser',(req, res) =>{
    res.send('User Update Successfully')
})

app.listen(PORT, () => console.log( `server running on http://localhost${PORT}`));