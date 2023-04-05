import { Request, Response } from "express";
import { genSalt, hash } from "bcrypt";
import User from "../models/user.model";

export async function getAllUsers(req: Request, res: Response) {
	try {
		const response = await User.find();
		res.json(response);
	} catch (error) {
		res.status(400).json({ error });
	}
}

export async function getUser(req: Request, res: Response) {
	try {
		const response = await User.findById(req.params.id);
		res.json(response);
	} catch (error) {
		res.status(400).json({ error });
	}
}

export async function updateUser(req: Request, res: Response) {
	let user;
	if (req.body.password) {
		const salt = await genSalt(10);
		const hashed = await hash(req.body.password, 10);
		user = {
			...req.body,
			password: hashed,
		};
	} else {
		user = {
			...req.body,
		};
	}
	try {
		const response = await User.findByIdAndUpdate(req.params.id, user);
		res.json(response);
	} catch (error) {
		res.status(400).json({ error });
	}
}

export async function deleteUser(req: Request, res: Response) {
	try {
		const response = await User.findByIdAndDelete(req.params.id);
		res.json(response);
	} catch (error) {
		res.status(400).json({ error });
	}
}
