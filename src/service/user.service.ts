
import { Connection } from 'typeorm';
import { DBHelper } from "../utils/dbhelper"
import { User } from "../entity/user"
import { Department } from 'src/entity/department';
export class UserService {
    constructor(private dbhelper: DBHelper) {
        this.dbhelper = dbhelper;
    }
    async createOrUpdateEntity<T>(entity: T): Promise<T> {
        try {
            const connection: Connection = await this.dbhelper.getDbConnection();
            // await this.dbhelper.closeConnection()
            const inserted: T = await connection.manager.save(entity);
            if(inserted){
                return inserted;
            }
            return inserted;
        } finally {
            await this.dbhelper.closeConnection();
        }
    }

    async findUserById(id) {
        const connection: Connection = await this.dbhelper.getDbConnection();
        // await this.dbhelper.closeConnection()
        const user = await connection.manager.findOne(User,{id: 1})
        console.log('user', user)
        connection.close();
        return user;
    }

    async deleteuser(id) {
        const connection: Connection = await this.dbhelper.getDbConnection();
        const res = connection.getRepository(User).delete({id:1})
        connection.close();
        return res;
    }

    async addUserCascade() {
        const connection: Connection = await this.dbhelper.getDbConnection();
        // const res = await connection.getRepository(User).delete({id:1})
      

        let department = new Department()
        department.departname = "CIO/Innovationhub"
        department.description = "great department"
        let user = new User();
        user.age = 1
        user.gender = "M"
        user.name = "Lyn"
        user.department = department
        // department.user = user
        let userRepository = await connection.getRepository(User)
        let departmentReposity = await connection.getRepository(Department)
       
        await departmentReposity.save(department)
        await userRepository.save(user)
       
     
        connection.close();

        console.log(user)
        return user;
    }
}
