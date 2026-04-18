import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

beforeAll(async () => {
	process.env.JWT_SECRET = process.env.JWT_SECRET || "test_jwt_secret";
	const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/taskmanager_test";
	await mongoose.connect(mongoUri);
	await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
	await mongoose.connection.close();
});