import Payment from "../models/payment.model.js";
// import captureReading from "./billController.js";

// Capture payment
export async function capturePayment(req, res) {
  try {
    let capturepayment = await Payment.create(req.body);
    if (capturepayment) {
      res.status(200).json({
        success: true,
        message: `Payment captured successfully`,
        data: capturepayment,
      });
    } else {
      res.status.json({
        success: true,
        message: "Couldn't capture the payment at this moment!",
      });
    }
    captureReading
  } catch (e) {
      console.log(e);
      res.status(500).json({
          success: false,
          message: "Oopss something's worng..."
      })
  }
}

//View a payment
export async function viewPayment(req, res) {
  try {
    let viewpayment = await Payment.findAll({
      where: { payment_id: req.params.id },
    });
    if (viewpayment) {
      res.json({
        success: true,
        message: "Payment records retrieved successfully!",
        data: viewpayment,
      });
    } else {
      res.json({
        success: true,
        message: "Can't load payment at this moment",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something's wrong",
    });
  }
}

// view all payments
export async function viewAllPayment(req, res) {
  try {
    let viewallpayment = await Payment.findAll();
    if (viewallpayment) {
      res.json({
        success: true,
        message: "Payments records retrieved successfully!",
        data: viewallpayment,
      });
    } else {
      res.json({
        success: true,
        message: "Can't load payments at this moment",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something's wrong...",
    });
  }
}
