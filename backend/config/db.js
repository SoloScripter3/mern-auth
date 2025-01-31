import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO);
    console.log("Database connected successfully");
  } catch (error) {
    console.error(```Error: ${error.message}```);
    process.exit(1);
  }
};

export default connectDB;
