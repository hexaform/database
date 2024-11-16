// @ts-nocheck

import { Database as Database_1 } from "./Database";

import { DuplicateKeyError as DuplicateKeyError_1 } from "./DuplicateKeyError";
    Object.defineProperty(DuplicateKeyError_1.prototype, "reflect:paramtypes", { get() { return [ "undefined", "undefined" ]; }});

import { MongooseDatabase as MongooseDatabase_1 } from "./MongooseDatabase";
  import { Mongoose as Mongoose_1 } from "mongoose";
  import { Logger as Logger_1 } from "@hexaform/logger";
    Object.defineProperty(MongooseDatabase_1.prototype, "reflect:paramtypes", { get() { return [ Mongoose_1, Logger_1 ]; }});
    Object.defineProperty(MongooseDatabase_1.prototype.connect, "reflect:paramtypes", { get() { return [ "undefined" ]; }});
    Object.defineProperty(MongooseDatabase_1.prototype.disconnect, "reflect:paramtypes", { get() { return [  ]; }});
