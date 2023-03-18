"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const connection_1 = require("./utils/connection");
const express_graphql_1 = require("express-graphql");
const handlers_1 = __importDefault(require("./handlers/handlers"));
const cors_1 = __importDefault(require("cors"));
// Dotenv config
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({ schema: handlers_1.default, graphiql: true }));
(0, connection_1.connectToDatabase)()
    .then(() => {
    return app.listen(process.env.PORT, () => console.log(`Server Open On Port ${process.env.PORT}`));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=app.js.map