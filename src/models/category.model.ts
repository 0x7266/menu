import { Schema, model } from "mongoose";

const categorySchema = new Schema(
	{
		// mongodb insere o id (String) automaticamente
		parent: { type: [], required: true },
		name: { type: String, required: true, unique: true },
	},
	{ timestamps: true }
);

export default model("Category", categorySchema);
