import { Schema, model } from "mongoose";

const productSchema = new Schema(
	{
		// mongodb insere o id (String) automaticamente
		categories: { type: [], required: true },
		name: { type: String, required: true, unique: true },
		qty: { type: Number, required: true },
		price: { type: Number, required: true },
	},
	{ timestamps: true }
);

export default model("Product", productSchema);
