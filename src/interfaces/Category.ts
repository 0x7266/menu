import { ObjectId } from "mongoose";

interface Category {
	_id: ObjectId;
	parent: Category | null;
	name: String;
}

export default Category;
