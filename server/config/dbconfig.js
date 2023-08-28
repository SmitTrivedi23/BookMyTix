import mongoose from "mongoose";

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("MongoDb connection Successfull");
});
connection.on("error", (err) => {
  console.log("MongDb connection failed");
});
