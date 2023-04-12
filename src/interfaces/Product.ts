import { ObjectId } from "mongoose";
import ICategory from "./Category";

interface IProduct extends Document {
	name: string;
	categories: ICategory[];
	qty: number;
	price: number;
}

export default IProduct;
