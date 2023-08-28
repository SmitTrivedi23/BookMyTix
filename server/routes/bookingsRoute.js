import express from "express"
import Stripe from 'stripe';
import authMiddleware from "../middlewares/authMiddleware.js";
import dotenv from "dotenv"
import Bookings from "../models/bookingModel.js";
import Show from "../models/showModel.js";



dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.stripe_key)

//Make Payment
router.post("/make-payment", authMiddleware, async (req, res) => {
    try {
      const { token, amount } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });
  
      const charge = await stripe.charges.create({
        amount: amount,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: "Ticket Booked for Movie",
      });
  
      const transactionId = charge.id;
  
      res.send({
        success: true,
        message: "Payment successful",
        data: transactionId,
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  });

  // book shows
router.post("/book-show", authMiddleware, async (req, res) => {
    try {
      // save booking
      const newBooking = new Bookings(req.body);
      await newBooking.save();
  
      const show = await Show.findById(req.body.show);
      // update seats
      await Show.findByIdAndUpdate(req.body.show, {
        bookedSeats: [...show.bookedSeats, ...req.body.seats],
      });
  
      res.send({
        success: true,
        message: "Show booked successfully",
        data: newBooking,
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  });

  // get all bookings by user
router.get("/get-bookings", authMiddleware, async (req, res) => {
    try {
      const bookings = await Bookings.find({ user: req.body.userId })
        .populate("show")
        .populate({
          path: "show",
          populate: {
            path: "movie",
            model: "movies",
          },
        })
        .populate("user")
        .populate({
          path: "show",
          populate: {
            path: "theatre",
            model: "theatres",
          },
        });
  
      res.send({
        success: true,
        message: "Bookings fetched successfully",
        data: bookings,
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  });
  export default router