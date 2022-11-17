import mongoose from "mongoose";
import config from "config";

async function connectToDatabase() {
	const dbUri = config.get<string>("dbUri");

	try {
		await mongoose.connect(dbUri);
		console.log("Connected to MongDB");
	} catch (e) {
		console.log("Unable to connect database");
		process.exit(1);
	}
}

export default connectToDatabase;
