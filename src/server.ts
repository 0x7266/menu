import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import swagger from "swagger-ui-express";
import swaggerDocs from "./config/swagger.json";
import index from "./routes/index";
import { connect } from "./config/database";

dotenv.config();

const port = process.env.PORT || 3334;
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api-docs", swagger.serve, swagger.setup(swaggerDocs)); // rota para ver a documentação da api

app.use("/", index);
app.get("*", (req, res) => {
	res.json({ error: "Nothing here" });
});

connect(() =>
	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	})
);
