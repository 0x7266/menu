import { Schema, Types, model } from "mongoose";
import Category from "../types/Category";

const categorySchema = new Schema(
	{
		// mongodb insere o id (String) automaticamente
		parent: { type: Types.Array<Category>, required: true },
		name: { type: String, required: true },
	},
	{ timestamps: true }
);

export default model("Product", categorySchema);
