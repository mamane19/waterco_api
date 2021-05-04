import express, { Router } from "express";
import membersRouter from "./membersRouter.js";
import usersRouter from "./usersRouter.js";
import billRouter from "./billRouter.js";
import premiseRouter from "./premiseRouter.js";
import paymentRouter from "./paymentRouter.js";
import routeRouter from "./routeRouter.js";

const router = express.Router();

router.use("/members", membersRouter);
router.use("/users", usersRouter);
router.use("/bills", billRouter);
router.use("/premise", premiseRouter);
router.use("/payment", paymentRouter);
router.use("/route", routeRouter);

export default router;
