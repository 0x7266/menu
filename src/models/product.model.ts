import { Schema, Types, model } from "mongoose";
import Category from "../types/Category";

const productSchema = new Schema(
	{
		// mongodb insere o id (String) automaticamente
		categories: { type: Types.Array<Category>, required: true },
		name: String,
		qty: Number,
		price: Number,
	},
	{ timestamps: true }
);

export default model("Product", productSchema);
