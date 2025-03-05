const express=require('express');
const app=express();
const port=8080;

app.get('/ping',(req,res)=>{
    res.send('PONG');
});


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});