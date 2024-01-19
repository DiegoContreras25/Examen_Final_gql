import mongoose from "mongoose";
import { contact } from "../types.ts";
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  nombre: { type: String, required: false },
  telefono: { type: String, required: false },
  id: { type: mongoose.Schema.Types.ObjectId, ref: "id", required: false },
});

export type contactModelType = mongoose.Document & Omit<contact, "id">;

export const contactModel = mongoose.model<contactModelType>(
  "contacto",
  contactSchema,
);
