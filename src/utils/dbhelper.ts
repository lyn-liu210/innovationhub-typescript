import { createConnection } from "typeorm";
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
import { User} from "../entity/user"
import {
    Connection,
} from 'typeorm';

import "reflect-metadata";
export class DBHelper {
    private readonly connectionOptions: SqlServerConnectionOptions;
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

        // console.log(`${__dirname}../entity/*.ts`)

        this.connectionOptions = {
            database,
            entities: [User],
            host,
            password,
            port,
            synchronize: true,
            type: 'mssql',
            username,
        };
    }
    async getDbConnection(): Promise<Connection> {
        let connection: Connection;
        connection = await createConnection(this.connectionOptions);
        return connection;
    }
    async closeConnection(): Promise<Connection> {
        return null;
    }
}

