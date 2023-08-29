import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRoute from "./routes/usersRoute.js";
import moviesRoute from "./routes/moviesRoute.js";
import theatresRoute from "./routes/theatreRoute.js";
import bookingsRoute from "./routes/bookingsRoute.js";
import path from "path";;
import { dirname } from 'path';


dotenv.config();

//middleware
const app = express();
app.use(express.json());
app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/theatres", theatresRoute);
app.use("/api/bookings", bookingsRoute);

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// render deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose
  .connect(process.env.mongo_url)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect...`));
