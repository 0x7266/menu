import { Schema, model } from "mongoose";
import IProduct from "interfaces/Product";

const productSchema = new Schema(
	{
		// mongodb insere o id (String) automaticamente
		name: { type: String, required: true },
		categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
		qty: { type: Number, required: true },
		price: { type: Number, required: true },
	},
	{ timestamps: true }
);

export default model<IProduct>("Product", productSchema);
