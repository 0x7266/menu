import { Request, Response } from "express";
import { ObjectId } from "mongoose";
import { Secret, sign } from "jsonwebtoken";
import User from "../models/user.model";

function createToken(_id: ObjectId) {
	return sign({ _id }, process.env.SECRET as Secret, {
		expiresIn: "3d",
	});
}

export async function login(req: Request, res: Response) {
	const { username, password } = req.body;
	try {
		const user = User.login(username, password);
		const token = createToken(user._id);
		res.status(200).json({ username, token });
	} catch (error) {
		res.status(400).json({ error });
	}
}

export async function signUp(req: Request, res: Response) {
	const { fullName, username, password } = req.body;
	try {
		const user = User.signup(fullName, username, password);
		console.log(user);
		const token = createToken(user._id);
		res.status(200).json({ username, token });
	} catch (error) {
		res.status(400).json({ error });
	}
}
