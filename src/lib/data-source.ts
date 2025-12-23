import "reflect-metadata";
import { DataSource } from "typeorm";
import { WaitlistUserSchema } from "../entities/WaitlistUser";

// Use a global variable to preserve the connection across hot reloads in development
const globalForData = globalThis as unknown as {
    AppDataSource: DataSource | undefined;
};

function createDataSource(): DataSource {
    return new DataSource({
        type: "mysql",
        host: process.env.DB_HOST || "127.0.0.1",
        port: Number(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "fastfluence",
        synchronize: true,
        logging: false,
        entities: [WaitlistUserSchema],
        migrations: [],
        subscribers: [],
    });
}

export const getDataSource = async () => {
    if (!globalForData.AppDataSource) {
        globalForData.AppDataSource = createDataSource();
    }
    
    const dataSource = globalForData.AppDataSource;
    
    if (!dataSource.isInitialized) {
        try {
            console.log("DB: Connecting...");
            await dataSource.initialize();
            console.log("DB: Connected and schema synchronized!");
        } catch (error) {
            console.error("DB: Connection failed:", error);
            throw error;
        }
    }
    return dataSource;
};
