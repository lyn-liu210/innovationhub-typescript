
import { Connection } from 'typeorm';
import { DBHelper } from "../utils/dbhelper"
export class DatabaseService {
    constructor(private dbhelper: DBHelper) {
        this.dbhelper = dbhelper;
    }
    async createOrUpdateEntity<T>(entity: T): Promise<T> {
        try {
            const connection: Connection = await this.dbhelper.getDbConnection();
            const inserted: T = await connection.manager.save(entity);
            return inserted;
        } finally {
            await this.dbhelper.closeConnection();
        }
    }
}
