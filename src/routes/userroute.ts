var express = require('express');
var router = express.Router();
import { DatabaseService } from "../service/dbservice"
import { DBHelper } from '../utils/dbhelper';
import { User } from '../entity/user';
router.post('/api', (req, res) => {
  const database: DatabaseService = new DatabaseService(new DBHelper("DLC000G4C59H2LD", 1433, "sa", "123456!Q@W", "innovationhub",));
  const body = req.body
  const user: User = new User()
  user.name = body.name
  user.gender = body.gender
  user.age = body.age
  database.createOrUpdateEntity<User>(user).then((data) => {
    if (data) {
      res.send(data)
    } else {
      res.send("error")
    }
  });
});
module.exports = router;
