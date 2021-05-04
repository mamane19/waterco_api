import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Payment = sequelize.define(
  "payment",
  {
    payment_id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    premise_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      references: {
        model: "premise",
        key: "premise_id",
      },
    },
    amount_paid: {
      type: Sequelize.BIGINT(50),
      allowNull: false,
    },
    payment_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "payment",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "payment_id" }],
      },
    ],
  }
);

export default Payment;
