import dotenv from "dotenv";
dotenv.config();
import express from "express";
import config from "config";
import connectToDatabase from "@src/database";
import log from "@src/utils/logger";

const app = express();

const PORT = config.get<number>("port");

app.get("/", (req, res) => {
	return res.send("Hello, visitor");
});

app.listen(PORT, () => {
	log.info(`Server is listening at http://localhost:${PORT}`);
	connectToDatabase();
});
