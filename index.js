import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 3001;

app.get("/", cors(), (req, res) => {
  res.send("Welcome to our water company dashboard API");
});
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Our Water Co API is now available on port ${port}`);
});
