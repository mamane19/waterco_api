import express from "express";
import {
  capturePayment,
  viewPayment,
  viewAllPayment,
} from "../controllers/paymentController.js";

const paymentRouter = express.Router();

// Capture Payment
paymentRouter.post("/", capturePayment);

// view a Payment
paymentRouter.get("/:id", viewPayment);

// View all Payments
paymentRouter.get("/", viewAllPayment);

export default paymentRouter;
