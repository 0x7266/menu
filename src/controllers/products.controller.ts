import { Request, Response } from "express";
import Product from "../models/product.model";

export default {
	getAllProducts: async (req: Request, res: Response) => {
		try {
			const result = await Product.find();
			res
				.status(200)
				.json({ message: "Done! Products have been found", product: result });
		} catch (error) {
			res.status(400).json({ error });
		}
	},
	getProduct: async (req: Request, res: Response) => {
		try {
			const result = await Product.findById(req.params.id);
			if (!result) {
				res.status(404).json({ error: "No such product" });
			}
			res
				.status(200)
				.json({ message: "Done! Product has been found", product: result });
		} catch (error) {
			res.status(400).json({ error });
		}
	},
	createProduct: async (req: Request, res: Response) => {
		const product = {
			categories: req.body.categories,
			name: req.body.name,
			qty: req.body.qty,
			price: req.body.price,
		};
		try {
			const result = await Product.create(product);
			if (!result) {
				res.status(404).json({ error: "Something wrong! Please try again" });
			}
			res
				.status(200)
				.json({ message: "Done! Product has been created", product: result });
		} catch (error) {
			res.status(400).json({ error });
		}
	},
	editProduct: async (req: Request, res: Response) => {
		const product = {
			categories: req.body.categories,
			name: req.body.name,
			qty: req.body.qty,
			price: req.body.price,
		};
		try {
			const result = await Product.findByIdAndUpdate(req.params.id, req.body);
			if (!result) {
				res
					.status(404)
					.json({ error: "There is something wrong! Please try again" });
			}
			res
				.status(200)
				.json({ message: "Done! Product has been updated", product: result });
		} catch (error) {
			res.status(400).json({ error });
		}
	},
	deleteProduct: async (req: Request, res: Response) => {
		const product = {
			categories: req.body.categories,
			name: req.body.name,
			qty: req.body.qty,
			price: req.body.price,
		};
		try {
			const result = await Product.findByIdAndDelete(req.params.id);
			if (!result) {
				res
					.status(404)
					.json({ error: "There is something wrong! Please try again" });
			}
			res
				.status(200)
				.json({ message: "Done! Product has been deleted", product: result });
		} catch (error) {
			res.status(400).json({ error });
		}
	},
};
