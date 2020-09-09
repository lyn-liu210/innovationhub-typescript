var express = require('express');
var router = express.Router();
import { DepartmentService } from "../service/departmentservice"
import { DBHelper } from '../utils/dbhelper';
import { User } from '../entity/user';
import { Department } from "src/entity/department";
const departmentService: DepartmentService = new DepartmentService();
router.get("/id/:id", (req, res) => {
  console.log(req.params.id)
  departmentService.findByid(req.params.id).then((user) => {
    if(user){
      res.send(user)  
    }else {
      res.send("error")
    }
  })
});
module.exports = router
