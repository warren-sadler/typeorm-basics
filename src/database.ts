import { Connection, ConnectionManager, getConnectionManager } from "typeorm";
import { User } from "./models/User";

export class Database {
  private connectionManager!: ConnectionManager;
  constructor(private connectionName = "default") {
    this.connectionManager = getConnectionManager();
  }
  async getConnection(): Promise<Connection> {
    let connection: Connection;
    if (!this.connectionManager.has(this.connectionName)) {
      connection = this.connectionManager.create({
        type: "postgres",
        password: "tb",
        database: "tb",
        username: "tb",
        name: this.connectionName,
        entities: [User],
        synchronize: true, // not recommended for production
        logging: true,
      });
    }
    connection = this.connectionManager.get(this.connectionName);
    if (connection.isConnected) return connection;
    return await connection.connect();
  }
}
