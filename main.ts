import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutation.ts";
import { typeDefs } from "./gql/schema.ts";
import mongoose from "mongoose";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
//https://cool-clam-56-xkanm99c0c5d.deno.dev/
//http://localhost:4000/
const env = await load();
const mongo_usr: string | undefined = env.MONGO_USR ||
  Deno.env.get("MONGO_USR");
const mongo_pwd: string | undefined = env.MONGO_PWD ||
  Deno.env.get("MONGO_PWD");
const mongo_uri: string | undefined = env.MONGO_URI ||
  Deno.env.get("MONGO_URI");
const db_name: string | undefined = env.DB_NAME || Deno.env.get("DB_NAME");

if (!mongo_usr || !mongo_pwd || !mongo_uri || !db_name) {
  console.log("Missing env values");
  Deno.exit(1);
}

await mongoose.connect(
  `mongodb+srv://${mongo_usr}:${mongo_pwd}@${mongo_uri}/${db_name}?retryWrites=true&w=majority`,
);

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
