import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";

const app = express();

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
