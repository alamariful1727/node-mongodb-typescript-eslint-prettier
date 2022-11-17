import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import config from "config";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "@src/route";
import connectToDatabase from "@src/database";
import log from "@src/utils/logger";

const app = express();

app.use(json());
app.use(cors());
app.use(helmet());
app.use(morgan(config.get<string>("env") == "production" ? "prod" : "dev"));

app.get("/", (req, res) => {
	return res.send("Hello, visitor");
});

app.use("/api", routes);

const PORT = config.get<number>("port");
app.listen(PORT, () => {
	log.info(`Server is listening at http://localhost:${PORT}`);
	connectToDatabase();
});
