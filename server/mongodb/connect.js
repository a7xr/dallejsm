import mongoose from "mongoose";
const connectDB = (ur) => {
  mongoose.set("strictQuery", true);
};
