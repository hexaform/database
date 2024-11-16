import mongoose from "mongoose";
import { DuplicateKeyError } from "./DuplicateKeyError";

interface MongoError extends Error {
    code?: number | string;
    get name(): string;
}

export function ErrorParserMongoosePlugin (schema: mongoose.Schema, options: mongoose.SchemaOptions) {
    function parseDuplicateKeyError(error: MongoError, res: any, next: mongoose.CallbackWithoutResultAndOptionalError) {
        if (error.name == "MongoServerError") { // instanceof mongoose.mongo.MongoServerError

            switch (error.code) {
                case 11000:
                case 11001:
                    // /^E11000 duplicate key error (index|collection): (?:[a-z-.]+\.)+([a-z]*) index\: ([a-z]+)_([0-9]+)/
                    let match = error.message.match(/duplicate key error collection: (?<collection>.+) index: (?<index>.+) dup key/);
                    if (match && match.groups) {
                        return next(new DuplicateKeyError(error.message, {
                            collection: match.groups.collection,
                            index: match.groups.index,
                            // @ts-ignore
                            value: error.keyValue.username
                        }));
                    } else {
                        return next(error);
                    }

                default:
                    return next(error);
            }
        } else {
            return next(error);
        }
    }

    function parseOptimisticLockError(error: MongoError, res: any, next: mongoose.CallbackWithoutResultAndOptionalError) {
        if (error.name == "MongoServerError") {
            return next(error);
        } else {
            return next(error);
        }
    }

    // schema.post("save", f);
    schema.post("updateOne", parseDuplicateKeyError);
    // schema.post("findOneAndUpdate", f);
}