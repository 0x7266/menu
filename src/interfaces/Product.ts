import { ObjectId } from "mongoose";
import Category from "./Category";

interface ProductModel extends Document {
	_id: ObjectId;
	categories: Category[];
	name: String;
	qty: Number;
	price: Number;
}

export default ProductModel;
