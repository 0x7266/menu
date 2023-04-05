import mongoose from "mongoose";

export function connect(callback: Function) {
	try {
		mongoose.connect(process.env.DB_URI!);
		mongoose.connection.on("error", (error) => console.error(error));
		mongoose.connection.once("open", async () => {
			console.log("Connected to database");
			await callback();
		});
	} catch (error) {
		console.error(error);
	}
}
