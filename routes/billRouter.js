import express from "express";
import { captureReading, viewBill } from "../controllers/billController.js";

const billRouter = express.Router();

// Capture Reading
billRouter.post("/", captureReading);

// View Bill
billRouter.get("/:id", viewBill);

export default billRouter;
