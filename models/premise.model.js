import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Premise = sequelize.define(
  "premise",
  {
    premise_id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    member_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "members",
        key: "member_id",
      },
    },
    route_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "routes",
        key: "route_id",
      },
    },
    payment_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "payment",
        key: "payment_id",
      },
    },
    meter_number: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "premise",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        fields: [{ name: "premise_id" }],
      },
    ],
  }
);

export default Premise;
