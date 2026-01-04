import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("Database connected"));
    mongoose.connect(`${process.env.MONGODB_URI}/quickshow`);
  } catch (error) {
    console.log("Error while connnecting db ", error.message);
  }
};

export default connectDB