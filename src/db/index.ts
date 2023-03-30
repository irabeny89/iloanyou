import mongoose, { connect } from "mongoose";
import { env } from "../config";

export default async function ConnectDB() {
  if (env.localDbUri && mongoose.connections[0].readyState !== 1) {
    mongoose.set("debug", env.nodeEnv !== "production");
    await connect(env.localDbUri);
  } else console.error("💥 database uri not defined!");
}

mongoose.connection.once("open", () =>
  console.log("🚀 Database connected: %s", env.localDbUri)
);
