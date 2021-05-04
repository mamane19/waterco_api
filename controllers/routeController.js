import Route from "../models/route.model.js";

// add a route
export async function addRoute(req, res) {
  try {
    let route = await Route.create(req.body);
    if (route) {
      res.status(200).json({
        success: true,
        message: "Route created successfully",
        data: route,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Oops Route could not be created at this moment!",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oops something went wrong...",
    });
  }
}

// view route
export async function viewRoute(req, res) {
  try {
    let viewallroute = await Route.findAll({
      where: { route_id: req.params.id },
    });
    if (viewallroute) {
      res.json({
        success: true,
        message: "Route record retrieved successfully",
        data: viewallroute,
      });
    } else {
      res.json({
        success: true,
        message: "Route record couldn't be retrieved at this moment!",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oopss somethng's wrong...",
    });
  }
}

// view all routes
export async function viewAllRoute(req, res) {
  try {
    let viewallroute = await Route.findAll();
    if (viewallroute) {
      res.json({
        success: true,
        message: "Route records retrieved successfully",
        data: viewallroute,
      });
    } else {
      res.json({
        success: true,
        message: "Route records couldn't be retrieved at this moment!",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oopss somethng's wrong...",
    });
  }
}

// update route record
export async function updateRoute(req, res) {
  try {
    let updateroute = await Route.update(req.body, {
      where: { route_id: req.params.id },
    });
    if (updateroute) {
      res.json({
        success: true,
        message: "Route record updated successfully!",
        data: updateroute,
      });
    } else {
      res.json({
        success: true,
        message: "Route could not be updated at this time!",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

// delete a route
export async function deleteRoute(req, res) {
    try {
      let deleteroute = await Route.destroy({
        where: { route_id: req.params.id },
      });
      if (deleteroute) {
        res.json({
          success: true,
          message: "Member deleted successfully",
          data: deleteroute,
        });
      } else {
        res.json({
          success: true,
          message: "Sorry but the member can't be deleted",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Oops!! Something's wrong",
      });
    }
  }

  //view premises on route
  export async function viewRoutePremises(req, res) {
    try {
      let memberpremises = await Premise.findAll({
        where: { member_id: req.params.member_id },
      });
      if (memberpremises) {
        res.json({
          success: true,
          message: "Premise records retrieved successfully",
          data: memberpremises,
        });
      } else {
        res.json({
          success: true,
          message: "No Premise records found.",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Oopss! Something is wrong...",
      });
    }
  }

  