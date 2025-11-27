import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

let db;

export const connectNativeDB = async () => {
  if (!db) {
    await client.connect();
    db = client.db("hrms");   // database name
    console.log("🟢 Native MongoDB Connected");
  }
  return db;
};
