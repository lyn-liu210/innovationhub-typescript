
import express=require('express');
import "reflect-metadata";
const user = require('./routes/userroute');
const bodyParser = require('body-parser');
const department = require('./routes/department');
const app:express.Application=express();
app.use( bodyParser.urlencoded({extended: false}) )
app.use(bodyParser.json({ limit: '50mb' }))
app.get('/',function(req,res){
    res.send('Hello World!');
});
app.use("/users",user)
app.use("/department",department)
app.listen(8080,function(){
    console.log('Example app listening on port 8080!');
})
