import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import index from "./routes/index";
import { connect } from "./config/database";

dotenv.config();

const port = process.env.PORT || 3334;
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/", index);

connect(() =>
	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	})
);
