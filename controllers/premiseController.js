import Premise from "../models/premise.model.js";

//Add a premise
export async function addPremise(req, res) {
  try {
    let premise = await Premise.create(req.body);
    if (premise) {
      res.status(200).json({
        success: true,
        message: "Promise created successfully",
        data: premise,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Promise could not be created at this time",
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

//View a promise
export async function viewPremise(req, res) {
  try {
    let allpremises = await Premise.findAll({
      where: { premise_id: req.params.id },
    });
    if (allpremises) {
      res.json({
        success: true,
        message: "Premise record retrieved successfully",
        data: allpremises,
      });
    } else {
      res.json({
        success: true,
        message: "No Premise record found!",
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

//View all premises
export async function viewAllPremises(req, res) {
  try {
    let allpremises = await Premise.findAll();
    if (allpremises) {
      res.json({
        success: true,
        message: "Premise records retrieved successfully",
        data: allpremises,
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

//Update premise record
export async function updatePremise(req, res) {
  try {
    let updatepremise = await Premise.update(req.body, {
      where: { premise_id: req.params.id },
    });
    if (updatepremise) {
      res.json({
        success: true,
        message: "Premise records updated successfully",
        data: updatepremise,
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
//View member premises
export async function viewMemberPremises(req, res) {
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

// view premises on route
export async function viewRoutePremises(res, req) {
  try {
    let viewroutepremises = await Premise.findAll({
      where: { route_id: req.params.route_id },
    });
    if (viewroutepremises) {
      res.json({
        success: true,
        message: "Route Premises retrieved successfully!",
        data: viewroutepremises,
      });
    } else {
      res.json({
        success: true,
        message: "Route Premises couldn't be retrieved at this moment!",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oopss something's wrong",
    });
  }
}

// view payments by premise
export async function viewPremisePayments(req, res) {
    try {
        let viewpremisepayment= await Premise.findAll({where: {payment_id: req.params.payment_id},});
        if(viewpremisepayment) {
            res.json({
                success: true,
                message: `Cool the payments of ${payment_id} retrieved successfully!`,
                data: viewpremisepayment
            })
        }else{
            res.json({
                success: true,
                message: `Couldn't retrieve ${payment_id} records`
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Oopss something is wrong'
        })
    }
}