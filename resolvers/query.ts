import { GraphQLError } from "graphql";
import { algoModel, algoModelType } from "../db/algo.ts";
export const Query = {
  algo: async (): Promise<algoModelType[]> => {
    const algo = await algoModel.find().exec();
    return algo;
  },
};
