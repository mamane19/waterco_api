import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";

const app = express();

app.use(cors());

// Adding headers
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  //Request headers
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization"
  );

  // Cookies
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Passing to the next layer of middleware
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});
dotenv.config();

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Welcome to our water company dashboard API");
});

app.use(express.json());
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Our Water Co API is now available on port ${port}`);
});
