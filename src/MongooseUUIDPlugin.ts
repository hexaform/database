import mongoose from "mongoose";

export const MongooseUUIDPlugin = (schema: mongoose.Schema, options: mongoose.SchemaOptions) => {
    schema.add({
        _id: mongoose.Schema.Types.UUID,
    });

    // Add middleware to post find queries that will serialize the _id field to string.
    schema.post(["find", "findOne", "findOneAndUpdate", "findOneAndReplace", "findOneAndRemove", "findOneAndDelete"], function (result: any) {
        if (result) {
            if (Array.isArray(result)) {
                result.forEach((doc) => {
                    doc._id = doc._id.toString();
                });
            } else {
                result._id = result._id.toString();
            }
        }
    });
};