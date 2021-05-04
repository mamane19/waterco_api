import express from "express";
import {
  addPremise,
  viewPremise,
  viewAllPremises,
  updatePremise,
  viewMemberPremises,
  viewRoutePremises,
  viewPremisePayments,
} from "../controllers/premiseController.js";

const premiseRouter = express.Router();

// Add a premise
premiseRouter.post("/", addPremise);

// View a premise
premiseRouter.get("/:id", viewPremise);

// View all premises
premiseRouter.get("/", viewAllPremises);

// Update a premise
premiseRouter.put("/:id", updatePremise);

// View member premises
premiseRouter.get("/:member_id", viewMemberPremises);

// View premises on route
premiseRouter.get("/:route_id", viewRoutePremises);

// View payments by premise
premiseRouter.get("/:payment_id", viewPremisePayments);

export default premiseRouter;
