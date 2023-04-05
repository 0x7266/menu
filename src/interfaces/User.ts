import { Model, ObjectId } from "mongoose";

export interface UserDocument extends Document {
	fullName: string;
	username: string;
	password: string;
}

export interface User {
	_id: ObjectId;
	fullName: string;
	username: string;
	password: string;
	token?: string;
}

export interface UserModel extends Model<User> {
	login(username: string, password: string): User;
	signup(fullName: string, username: string, password: string): User;
}
