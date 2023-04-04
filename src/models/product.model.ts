import { Schema, model } from "mongoose";

const productSchema = new Schema({}, { timestamps: true });

export default model("Product", productSchema);
