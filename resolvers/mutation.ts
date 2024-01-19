import { GraphQLError } from "graphql";
import { contactModel, contactModelType } from "../db/contact.ts";

export const Mutation = {
  addContact: async (
    _: unknown,
    args: { nombre: string; telefono: string },
  ): Promise<contactModelType> => {
    const contact = {
      nombre: args.nombre,
      telefono: args.telefono,
    };
    const newContact = await contactModel.create(contact);
    return newContact;
  },
  deleteContact: async (
    _: unknown,
    args: { id: string },
  ): Promise<contactModelType> => {
    const contact = await contactModel.findByIdAndDelete(args.id);
    if (!contact) {
      throw new GraphQLError(`No contact found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return contact;
  },
  updateContact: async (
    _: unknown,
    args: { id: string; nombre: string; telefono: string },
  ): Promise<contactModelType> => {
    const contact = await contactModel.findByIdAndUpdate(args);
    if (!contact) {
      throw new GraphQLError(`No contact found with id ${args}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return contact;
  },
};
