import { default as mongoose, Mongoose, ConnectOptions } from "mongoose";
import { Logger } from "@hexaform/logger";
import { Database } from "./Database";
import { ErrorParserMongoosePlugin } from "./ErrorParserMongoosePlugin";

mongoose.plugin(ErrorParserMongoosePlugin);

type ConnectionOptions = {
    uri: string,
    user?: string,
    pass?: string
}

export class MongooseDatabase extends Database {
    private mongoose: Mongoose;
    private logger: Logger;

    constructor(mongoose: Mongoose, logger: Logger) {
        super();
        this.mongoose = mongoose;
        this.logger = logger;
    }

    async connect({uri, user, pass}: ConnectionOptions): Promise<void> {
        this.logger.debug("Connecting to Mongo...");

        let mongooseOptions: ConnectOptions = {
            serverSelectionTimeoutMS: 1000
        };
        if (user && pass) {
            this.logger.debug("Using username and password.");
            mongooseOptions.user = user;
            mongooseOptions.pass = pass;
        } else {
            this.logger.debug("Not using username and password.");
        }

        this.mongoose.set("strictQuery", false);
        this.mongoose.set("autoIndex", true); // TODO: Disable in production!
        await this.mongoose.connect(uri, mongooseOptions);

        this.logger.debug("Connected.");
    }

    async disconnect() {
        this.logger.debug("Disconnecting Mongo...");

        await this.mongoose.disconnect();

        this.logger.debug("Disconnected.");
    }
}