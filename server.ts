import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

// Sample data
const card = [
  {
    id: "1",
    title: "Akroma, Angel of Wrath",
    color: "white",
  },
  {
    id: "2",
    title: "Phage",
    color: "black",
  },
];
