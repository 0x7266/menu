import { Request, Response } from "express";
import Category from "../models/category.model";
import ICategory from "../interfaces/Category";

export async function getAllCategories(req: Request, res: Response) {
	try {
		const categories: ICategory[] = await Category.find().populate("parent");
		res.status(200).json(categories);
	} catch (error) {
		res.status(500).json({ error });
	}
}

export async function getCategory(req: Request, res: Response) {
	try {
		const response: ICategory = await Category.findById(req.params.id).populate(
			"parent"
		);
		if (!response) {
			return res.status(404).json({ error: "Category not found" });
		}
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error });
	}
}

export async function createCategory(req: Request, res: Response) {
	try {
		const response = await Category.create(req.body);
		res.status(201).json(response);
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
			return res.status(404).json({ error: "Category not found" });
		}
		res
			.status(200)
			.json({ message: "Done! Category has been deleted", category: response });
	} catch (error) {
		res.status(400).json({ error });
	}
}
