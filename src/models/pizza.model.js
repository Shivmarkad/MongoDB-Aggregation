import { Schema, model } from "mongoose";

const pizzaSchema = new Schema(
  {
    name: {
      type: String
    },
    size: {
      type: String
    },
    price: {
      type: Number
    },
    quantity: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

export default model('Pizza', pizzaSchema);
