import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  HOST: "us-cdbr-east-03.cleardb.com",
  USER: "b767149b000880",
  PASSWORD: "54291a32",
  DB: "heroku_d2c25d529835f4a",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default dbConfig;
