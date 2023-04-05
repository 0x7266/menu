import { Request, Response } from "express";
import { ObjectId } from "mongoose";
import { Secret, sign } from "jsonwebtoken";
import { genSalt, hash } from "bcrypt";
import validator from "validator";
import User from "../models/user.model";

function createToken(_id: ObjectId) {
	return sign({ _id }, process.env.SECRET as Secret, {
		expiresIn: "3d",
	});
}

export async function login(req: Request, res: Response) {
	const { username, password } = req.body;
	try {
		const user = await User.login(username, password);
		const token = createToken(user._id);
		res.status(200).json({ username, token });
	} catch (error) {
		res.status(400).json({ error });
	}
}

export async function signUp(req: Request, res: Response) {
	const { fullName, username, password } = req.body;
	try {
		if (!fullName || !username || !password) {
			return res.status(404).json({ error: "All fields must be filled" });
		}
		const exists = await User.findOne({ username });
		if (exists) {
			return res.status(404).json({ error: "Username already in use" });
		}
		if (!validator.isStrongPassword(password)) {
			return res.status(404).json({
				error:
					"Password must have at least one uppercase character, one special character and one number",
			});
		}
		const user = await User.signup(fullName, username, password);
		const token = createToken(user._id);
		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({ error });
	}
}
