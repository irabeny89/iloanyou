import mongoose, { connect } from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const dbUri = process.env.NODE_ENV === "production" ? process.env.MONGO_URI : process.env.MONGO_URI_COMPASS

export default async function ConnectDB() {
  if (dbUri && mongoose.connections[0].readyState !== 1) {
    mongoose.set("debug", process.env.NODE_ENV !== "production");
    await connect(dbUri);
  } else console.error("database uri not defined!")
}

mongoose.connection.once("open", () =>
  console.log("Database connected: %s", dbUri)
);
