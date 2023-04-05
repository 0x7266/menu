import { User, UserModel } from "interfaces/User";
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

// como é uma api de administração, todos os usuários criados terão privilégios de administradores
const userSchema = new Schema<User, UserModel>(
	{
		// mongodb insere o id (String) automaticamente
		fullName: { type: String, required: true, minLength: 5 },
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{ timestamps: true }
);

userSchema.statics.signup = async function signUp(
	fullName,
	username,
	password
) {
	if (!fullName || !username || !password) {
		throw Error("All fields must be filled");
	}
	if (!validator.isStrongPassword(password)) {
		throw Error(
			"Password must have at least one uppercase character, one special character and one number"
		);
	}
	const exists = await this.findOne({ username });
	if (exists) {
		throw Error("Username already in use");
	}
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({ fullName, password: hash });
	return user;
};

userSchema.statics.login = async function logIn(username, password) {
	if (!username || !password) {
		throw Error("All fields must be filled");
	}
	const user = await this.findOne({ username });
	if (!user) {
		throw Error("Incorrect username");
	}

	const match = await bcrypt.compare(password, user.password);
	if (!match) {
		throw Error("Incorrect password");
	}
	return user;
};

export default model<User, UserModel>("User", userSchema);
