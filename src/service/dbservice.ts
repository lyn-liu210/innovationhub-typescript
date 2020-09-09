
import { Connection } from 'typeorm';
import { DBHelper } from "../utils/dbhelper"
import { User } from "../entity/user"
export class DatabaseService {
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
        return user;
    }
}
