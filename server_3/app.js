import express from "express";
import { product } from "./product.js";

const app = express();
const PORT = 3000;

app.get('/' , ( req , res ) =>{
    res.send("welcom home")
});
app.get('/about' , ( req , res ) =>{
    res.send("welcom about")
});
app.get('/contact' , ( req , res ) =>{
    res.send("welcom contact")
});
app.get('/product' , ( req , res ) =>{
    console.log("request", req.url);
    res.send( product);
});

app.get('/product:id' , ( req , res ) =>{
    console.log("request single prod api", req.url);
    console.log("request params", typeof req.params.id);
    const findProduct = product.find( (obj) =>{
        console.log("obj", obj);

        if(obj.id == req.params.id){
            return obj
        }
    });
      console.log("findProduct", findProduct);
    if(findProduct){
        res.send(findProduct)
    }else{
          res.send("Product not Found");
    }
});


app.listen(PORT ,()=> console.log(`✅ server running on http://localhost: ${PORT}`));