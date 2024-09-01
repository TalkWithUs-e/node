const express = require("express");
const app = express();
const port = 3000;

app.post("/",(req, res) => {
    res.status(201).send("Create Contacts");
});

app.get("/square/:Number",(req, res) => {
    
    if (typeof req.params.Number === "number"){
        x=(req.params.Number)**2
        res.status(200).send(`square of 5 is ${x}`);

    }else {
        res.status(404).send('NON-ex')
    }
    
    
});

app.put("/contacts/:id",(req, res) => {
    res.status(200).send(`Update Contact for ID:${req.params.id}`);
});

app.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 실행 중`);
})