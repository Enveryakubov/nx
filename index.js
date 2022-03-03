#!/usr/bin/env node

const { generateTemplateFiles } = require("generate-template-files");
const path = require("path");
const config = require("./package.json");

generateTemplateFiles([
  {
    option: "Create microfrontend fragment",
    defaultCase: "(snakeCase)",
    entry: {
      folderPath: path.resolve(__dirname, "templates", "ofr-mf-boilerplate"),
    },
    stringReplacers: [
      { question: "Insert microfrontend name", slot: "__name__" },
    ],
    output: {
      path: "./Fragment",
      pathAndFileNameDefaultCase: "(snakeCase)",
      overwrite: true,
    },
  },
  {
    option: "Create microfrontend host",
    defaultCase: "(snakeCase)",
    entry: {
      folderPath: "./templates/ofr-mf-host",
    },
    stringReplacers: [
      { question: "Insert microfrontend name", slot: "__name__" },
    ],
    output: {
      path: "./Host",
      pathAndFileNameDefaultCase: "(snakeCase)",
      overwrite: true,
    },
  },
]);