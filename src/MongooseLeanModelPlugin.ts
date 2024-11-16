import mongoose from "mongoose";

export const MongooseLeanModelPlugin = (schema: mongoose.Schema, options: mongoose.SchemaOptions) => {
    // Add middleware to find queries that will make them lean.
    schema.pre(["find", "findOne", "findOneAndUpdate", "findOneAndReplace", "findOneAndRemove", "findOneAndDelete"], function () {
        this.lean();
    });
};