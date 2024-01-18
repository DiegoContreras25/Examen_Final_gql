import { GraphQLError } from "graphql";
import { algoModel, algoModelType } from "../db/algo.ts";

export const Mutation = {
  addalgo: async (
    _: unknown,
    args: { name: string },
  ): Promise<algoModelType> => {
    const algo = {
      name: args.name,
    };
    const newalgo = await algoModel.create(algo);
    return newalgo;
  },
  deletealgo: async (
    _: unknown,
    args: { id: string },
  ): Promise<algoModelType> => {
    const algo = await algoModel.findByIdAndDelete(args.id);
    if (!algo) {
      throw new GraphQLError(`No algo found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return algo;
  },
};
