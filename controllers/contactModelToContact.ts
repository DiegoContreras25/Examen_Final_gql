import { contactModelType } from "../db/contact.ts";
import { contact } from "../types.ts";

export const contactModelToContact = (
  contactModel: contactModelType,
): contact => {
  return {
    nombre: contactModel.nombre,
    telefono: contactModel.telefono,
  };
};
