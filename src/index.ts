import "./paramtypes";

import { Database } from "./Database";
import { MongooseDatabase } from "./MongooseDatabase";
import { MongooseLeanModelPlugin } from "./MongooseLeanModelPlugin";
import { MongooseUUIDPlugin } from "./MongooseUUIDPlugin";
import { DuplicateKeyError } from "./DuplicateKeyError";

export {
    Database,
    MongooseDatabase,
    MongooseLeanModelPlugin,
    MongooseUUIDPlugin,
    DuplicateKeyError
};
export default {
    Database,
    MongooseDatabase,
    MongooseLeanModelPlugin,
    MongooseUUIDPlugin,
    DuplicateKeyError
};