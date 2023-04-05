import { ObjectId, Types } from "mongoose";
import Category from "./Category";

interface Product {
	_id: ObjectId;
	categories: Types.DocumentArray<Category>;
	name: String;
	qty: Number;
	price: Number;
}

export default Product;
