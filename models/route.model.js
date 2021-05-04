import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Route = sequelize.define(
  "routes",
  {
    route_id: {
      autoincrement: true,
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    
    route_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING(50),
    },
  },
  {
    sequelize,
    tableName: "routes",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        fields: [{ name: "route_id" }],
      },
    ],
  }
);

export default Route;
