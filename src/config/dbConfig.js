import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Loads variables from .env into process.env
const user = process.env.MONGO_USER;
const pass = encodeURIComponent(process.env.MONGO_PASS);
const mongoURL = `mongodb+srv://${user}:${pass}@online-class-db.ivt39qv.mongodb.net/online_ntdl?retryWrites=true&w=majority&appName=Online-class-db`;

export const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURL);
    conn && console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};
