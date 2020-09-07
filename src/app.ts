
import express=require('express');
// import {  dbtest} from "./routes/dbtest";
import "reflect-metadata";

var dbtest = require('./routes/dbtest');
const app:express.Application=express();
app.get('/',function(req,res){
    res.send('Hello World!');
});
// host: string,
// port: number,
// username: string,
// password: string,
// database: string
console.log("__dirname", __dirname)
app.use("/testdb",dbtest)
app.listen(8888,function(){
    console.log('Example app listening on port 8888!');
})

// createConnection({
//     type: "mssql",
//     host: "DLC000G4C59H2LD",
//     // domain: "DIR",
//     username:"sa",
//     password:"123456!Q@W",
//     port: 1433,
//     database: "innovationhub",
//     extra: {
//         driver: sqlDriver,
//         options: {
//             "trustedConnection": true
//         },
//     },
//     entities: [
//         __dirname + "/entity/*.js"
//     ],
//     synchronize: true,
//     logging: false
// }).then(connection => {
//     console.log("connection successfully!")
// }).catch(error => console.log(error));