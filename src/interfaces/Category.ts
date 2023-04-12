import { Document, ObjectId, Types } from "mongoose";

interface ICategory extends Document {
	name: string;
	parent: ICategory | null;
	parentName?: string;
}

export default ICategory;
