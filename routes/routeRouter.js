import express from "express";
import {
  addRoute,
  viewRoute,
  viewAllRoute,
  updateRoute,
  deleteRoute,
} from "../controllers/routeController.js";

const routeRouter = express.Router();

// Add a Route
routeRouter.post("/", addRoute);

// View a Route
routeRouter.get("/:id", viewRoute);

// View All Routes
routeRouter.get("/", viewAllRoute);

//Update a Route
routeRouter.put("/:id", updateRoute);

// Delete a Route
routeRouter.delete("/:id", deleteRoute);

export default routeRouter;
