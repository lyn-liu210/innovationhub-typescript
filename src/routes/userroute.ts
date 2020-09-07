var express = require('express');
var router = express.Router();
import {DatabaseService}  from "../service/dbservice"
import { DBHelper } from '../utils/dbhelper';
import { User } from '../entity/user';
// const myPool = require('./db_pool');
const sql = require("mssql/msnodesqlv8");
/* GET users listing. */
router.post('/api', (req, res) => {
  const database : DatabaseService = new DatabaseService(new DBHelper("DLC000G4C59H2LD",1433,"sa","123456!Q@W","innovationhub",));
  const user : User = new User()
  user.name = "Lyn"
  user.gender="M"
  user.age = 12
  database.createOrUpdateEntity<User>(user).then((data) => {
    if(data){
      res.send(data)
    } else {
      res.send("error")
    }
  });
  // rs.
  });

module.exports = router;
