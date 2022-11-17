import dotenv = require("dotenv");
import express from "express";
import config from "config";

const app = express();
dotenv.config();

const PORT = config.get("port");

app.get("/", (req, res) => {
	return res.send("Hello, visitor");
});

app.listen(PORT, () => {
	console.log(`Server is listening at http://localhost:${PORT}`);
});
