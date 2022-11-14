import express from "express";

const app = express();

app.get("/", (req, res) => {
	return res.send("Hello, visitor");
});

app.listen(4000, () => {
	console.log(`Server is listening at http://localhost:${4000}`);
});
