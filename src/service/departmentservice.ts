
import { Connection } from 'typeorm';
import { User } from "../entity/user"
import { Department } from 'src/entity/department';
import { createConnection, getConnection} from "typeorm";
export class DepartmentService {
    async findByid(id) {
        const connection: Connection = await createConnection()
        // await this.dbhelper.closeConnection()
        const department = await  connection.getRepository(Department).findOne({id: id})
        // const department = await  connection.getRepository(Department).findOne({id: id},{ relations: ["user"] })
        // let department = await connection
        // .getRepository(Department)
        // .createQueryBuilder("131")
        // .innerJoinAndSelect("131.user", "123")
        // .getOne()
        // console.log('department', department.user)
        // console.log('department', department)
        connection.close();
        return department;
    }

    async deleteuser(id) {
        const connection: Connection = await getConnection();
        const res = connection.getRepository(User).delete({id:1})
        connection.close();
        return res;
    }

 
}
