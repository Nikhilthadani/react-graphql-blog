import express from "express";
import { config } from "dotenv";
import { connectToDatabase } from "./utils/connection";
import { graphqlHTTP } from "express-graphql";
import schema from "./handlers/handlers";
import cors from "cors";
// Dotenv config
config();

const app = express();
app.use(cors());
app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: false }));

connectToDatabase()
  .then(() => {
    return app.listen(process.env.PORT, () =>
      console.log(`Server Open On Port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(err));
