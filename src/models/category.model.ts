import { Schema, model } from "mongoose";
import ICategory from "interfaces/Category";

const categorySchema = new Schema(
	{
		// mongodb insere o id (String) automaticamente
		name: { type: String, required: true, unique: true },
		parent: { type: Schema.Types.ObjectId, ref: "Category", default: null },
	},
	{ timestamps: true }
);

export default model<ICategory>("Category", categorySchema);
