import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Bill = sequelize.define(
  "bill",
  {
    bill_id: {
      autoincrement: true,
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    premise_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      references: {
          model: 'premise',
          key: 'premise_id'
      },
    },
    payment_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      references: {
          model: 'payment',
          key: 'payment_id'
      },
    },
  },
  {
    sequelize,
    tableName: "bill",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        fields: [{ name: "bill_id" }],
      },
    ],
  }
);

export default Bill;
