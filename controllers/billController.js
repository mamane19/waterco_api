import Bill from "../models/bill.model.js";

// Capture Bill
export async function captureReading(req, res) {
  try {
    let capturereading = await Bill.create(req.body);
    if (capturereading) {
      res.status(200).json({
        success: true,
        message: `Reading Captured successfully`,
        data: capturereading,
      });
    } else {
      res.status.json({
        success: true,
        message: "Couldn't capture the payment at this moment!",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oopss something's worng...",
    });
  }
}

export async function viewBill(req, res) {
  try {
    let viewbill = await Bill.findAll({ where: { bill_id: req.params.id } });
    if (viewbill) {
      res.json({
        success: true,
        message: "Bill records retrieved successfully",
        data: viewbill,
      });
    } else {
      res.json({
        success: false,
        message: "BIll records couldn't be retrieved at this time!",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oops something's wrong...",
    });
  }
}
