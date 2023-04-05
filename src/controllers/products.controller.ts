import { Request, Response } from "express";
import Product from "../models/product.model";

export async function getAllProducts(req: Request, res: Response) {
	try {
		const response = await Product.find();
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({ error });
	}
}

export async function getProduct(req: Request, res: Response) {
	try {
		const response = await Product.findById(req.params.id);
		if (!response) {
			res.status(404).json({ error: "No such product" });
		}
		res
			.status(200)
			.json({ message: "Done! Product has been found", product: response });
	} catch (error) {
		res.status(400).json({ error });
	}
}
export async function createProduct(req: Request, res: Response) {
	const product = {
		categories: req.body.categories,
		name: req.body.name,
		qty: req.body.qty,
		price: req.body.price,
	};
	try {
		const response = await Product.create(product);
		if (!response) {
			res.status(404).json({ error: "Something wrong! Please try again" });
		}
		res
			.status(200)
			.json({ message: "Done! Product has been created", product: response });
	} catch (error) {
		res.status(400).json({ error });
	}
}
export async function updateProduct(req: Request, res: Response) {
	const product = {
		categories: req.body.categories,
		name: req.body.name,
		qty: req.body.qty,
		price: req.body.price,
	};
	try {
		const response = await Product.findByIdAndUpdate(req.params.id, req.body);
		if (!response) {
			res
				.status(404)
				.json({ error: "There is something wrong! Please try again" });
		}
		res
			.status(200)
			.json({ message: "Done! Product has been updated", product: response });
	} catch (error) {
		res.status(400).json({ error });
	}
}
export async function deleteProduct(req: Request, res: Response) {
	try {
		const response = await Product.findByIdAndDelete(req.params.id);
		if (!response) {
			res
				.status(404)
				.json({ error: "There is something wrong! Please try again" });
		}
		res
			.status(200)
			.json({ message: "Done! Product has been deleted", product: response });
	} catch (error) {
		res.status(400).json({ error });
	}
}
