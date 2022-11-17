import dotenv = require("dotenv");
import express from "express";
import config from "config";
import connectToDatabase from "./database";

const app = express();
dotenv.config();

const PORT = config.get<number>("port");

app.get("/", (req, res) => {
	return res.send("Hello, visitor");
});

app.listen(PORT, () => {
	console.log(`Server is listening at http://localhost:${PORT}`);
	connectToDatabase();
});
