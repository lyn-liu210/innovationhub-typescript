import { createConnection, getConnection} from "typeorm";
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
import { User} from "../entity/user"
import { Department} from "../entity/department"
import {
    Connection,
} from 'typeorm';
export class DBHelper {
    private readonly connectionOptions: SqlServerConnectionOptions;
    private  connection: Connection;
    constructor(
        host: string,
        port: number,
        username: string,
        password: string,
        database: string
    ) {
        if (!host || !port || !username || !password || !database) {
            throw new Error('Invalid connection parameters');
        }
        this.connectionOptions = {
            database,
            entities: [User,Department],
            host,
            password,
            port,
            synchronize: true,
            type: 'mssql',
            username,
            // synchronize
        };
    }
    async getDbConnection(): Promise<Connection> {
        // let connection: Connection;
        this.connection = await createConnection(this.connectionOptions);
        return this.connection;
    }
    async closeConnection(): Promise<void> {
       
        let connection = await getConnection();
        await connection.close();
    }
}

