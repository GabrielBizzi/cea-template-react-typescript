import type IForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import Dotenv from "dotenv-webpack";

const Environment = new Dotenv({
  safe: true,
  systemvars: true,
  silent: true,
});
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: "webpack-infrastructure",
  }),
  Environment,
];
