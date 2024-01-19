import { GraphQLError } from "graphql";
import { contactModel, contactModelType } from "../db/contact.ts";
export const Query = {
  getContacts: async (): Promise<contactModelType[]> => {
    const contacts = await contactModel.find().exec();
    return contacts;
  },
  getContact: async (
    _: unknown,
    args: { id: string },
  ): Promise<contactModelType> => {
    const contact = await contactModel.findById(args.id);
    if (!contact) {
      throw new GraphQLError(`No contact found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return contact;
  },
};
