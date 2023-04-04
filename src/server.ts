import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const port = process.env.PORT || 3334;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello, Fábrica de Startups");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
