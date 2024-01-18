import mongoose from "mongoose";
import { algo } from "../types.ts";
const Schema = mongoose.Schema;

const algoSchema = new Schema({
  name: { type: String, required: true },
  algo: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "algo",
    required: false,
    default: [],
  },
});

export type algoModelType = mongoose.Document & Omit<algo, "id">;

export const algoModel = mongoose.model<algoModelType>(
  "algo",
  algoSchema,
);
