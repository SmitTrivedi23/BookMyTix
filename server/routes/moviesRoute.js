import express from "express";
import Movie from "../models/movieModel.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { response } from "express";

const router = express.Router();

//Add a new movie
router.post("/add-movie", authMiddleware, async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.send({
      success: true,
      message: "Movie added successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//get all movies
router.get("/get-all-movies", authMiddleware, async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.send({
      success: true,
      message: "Movies fetched successfully",
      data: movies,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//update a movie
router.post("/update-movie", authMiddleware, async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.body.movieId, req.body);
    res.send({
      success: true,
      message: "Movie Updated Successfully",
    });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

//Delete Movie
router.post("/delete-movie", authMiddleware, async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.body.movieId);
    res.send({
      success: true,
      message: "Movie Deleted Successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get a movie by id
router.get("/get-movie-by-id/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.send({
      success: true,
      message: "Movie fetched successfully",
      data: movie,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});
export default router;
