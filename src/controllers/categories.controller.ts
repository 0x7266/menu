import { Request, Response } from "express";
import Category from "../models/category.model";

export async function getAllCategories(req: Request, res: Response) {
	try {
		const response = await Category.find();
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({ error });
	}
}

export async function getCategory(req: Request, res: Response) {
	try {
		const response = await Category.findById(req.params.id);
		if (!response) {
			return res.status(404).json({ error: "Category not found" });
		}
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({ error });
	}
}

export async function createCategory(req: Request, res: Response) {
	const { parent, name } = req.body.name;
	try {
		if (!parent || !name) {
			return res.status(404).json({ error: "All fields must be filled" });
		}
		const response = await Category.create({ parent, name });
		if (!response) {
			return res
				.status(404)
				.json({ error: "There is something wrong! Please try again" });
		}
		res
			.status(200)
			.json({ message: "Done! Category has been created", category: response });
	} catch (error) {
		res.status(400).json({ error });
	}
}

export async function updateCategory(req: Request, res: Response) {
	const { parent, name } = req.body.name;
	try {
		const response = await Category.findByIdAndUpdate(req.params.id, {
			parent,
			name,
		});
		if (!response) {
			return res
				.status(404)
				.json({ error: "There is something wrong! Please try again" });
		}
		res
			.status(200)
			.json({ message: "Done! Category has been updated", category: response });
	} catch (error) {
		res.status(400).json({ error });
	}
}

export async function deleteCategory(req: Request, res: Response) {
	try {
		const response = await Category.findByIdAndDelete(req.params.id);
		if (!response) {
			return res
				.status(404)
				.json({ error: "There is something wrong! Please try again" });
		}
		res
			.status(200)
			.json({ message: "Done! Category has been deleted", category: response });
	} catch (error) {
		res.status(400).json({ error });
	}
}
