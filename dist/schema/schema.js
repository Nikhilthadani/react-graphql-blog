"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentType = exports.BlogType = exports.UserType = void 0;
const graphql_1 = require("graphql");
const Blog_1 = __importDefault(require("../models/Blog"));
const Comment_1 = __importDefault(require("../models/Comment"));
const User_1 = __importDefault(require("../models/User"));
exports.UserType = new graphql_1.GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID) },
        name: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        email: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        password: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        blogs: {
            type: (0, graphql_1.GraphQLList)(exports.BlogType),
            async resolve(parent) {
                return await Blog_1.default.find({ user: parent.id });
            },
        },
        comments: {
            type: (0, graphql_1.GraphQLList)(exports.CommentType),
            async resolve(parent) {
                return await Comment_1.default.find({ user: parent.id });
            },
        },
    }),
});
exports.BlogType = new graphql_1.GraphQLObjectType({
    name: "BlogType",
    fields: () => ({
        id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID) },
        title: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        content: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        date: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        user: {
            type: exports.UserType,
            async resolve(parent) {
                return await User_1.default.findById(parent.user);
            },
        },
        comments: {
            type: (0, graphql_1.GraphQLList)(exports.CommentType),
            async resolve(parent) {
                return Comment_1.default.find({ blog: parent.id });
            },
        },
    }),
});
exports.CommentType = new graphql_1.GraphQLObjectType({
    name: "CommentType",
    fields: () => ({
        id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID) },
        text: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        user: {
            type: exports.UserType,
            async resolve(parent) {
                return await User_1.default.findById(parent.user);
            },
        },
        blog: {
            type: exports.BlogType,
            async resolve(parent) {
                return await Blog_1.default.findById(parent.blog);
            },
        },
    }),
});
//# sourceMappingURL=schema.js.map