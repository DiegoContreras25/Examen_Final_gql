import { algoModelType } from "../db/algo.ts";
import { algo } from "../types.ts";

export const algoModelToAlgo = (algoModel: algoModelType): algo => {
  return {
    name: algoModel.name,
    algo: algoModel.algo,
  };
};
