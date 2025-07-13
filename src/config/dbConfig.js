import mongoose from "mongoose";
const mongoURL = "mongodb://127.0.0.1:27017/online_ntdl";

export const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURL);
    conn && console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};
