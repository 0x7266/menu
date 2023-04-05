import { verify, Secret } from "jsonwebtoken";
import User from "../models/user.model";
import { NextFunction, Request, Response } from "express";

interface JwtPayload {
	_id: string;
}

export async function requireAuth(
	req: Request,
	res: Response,
	next: NextFunction
) {
	//verify authentication
	const { authorization } = req.headers;
	if (!authorization) {
		return res.status(401).json({ error: "Authorization token required" });
	}
	const token = authorization.split(" ")[1];
	try {
		const { _id } = verify(token, process.env.SECRET as Secret) as JwtPayload;
		req.user = await User.findOne({ _id }).select("_id"); // retorna apenas o _id do banco de dados
		next();
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: "Request is not authorized" });
	}
}
