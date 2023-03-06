import type { ModuleOptions } from "webpack";

export const rules: Required<ModuleOptions>["rules"] = [
  // Add support for native node modules
  {
    // We're specifying native_modules in the test because the asset relocator loader generates a
    // "fake" .node file which is really a cjs file.
    test: /native_modules[/\\].+\.node$/,
    use: "node-loader",
  },
  // {
  //   resolve: {
  //     fallback: {
  //       path: require.resolve("path-browserify"),
  //       os: require.resolve("os-browserify/browser"),
  //       zlib: require.resolve("browserify-zlib"),
  //       http: require.resolve("stream-http"),
  //       https: require.resolve("https-browserify"),
  //       url: require.resolve("url/"),
  //       assert: require.resolve("assert/"),
  //       fs: false,
  //       net: false,
  //       tls: false,
  //       module: false,
  //       child_process: false,
  //       readline: false,
  //       stream: require.resolve("stream-browserify"),
  //       constants: require.resolve("constants-browserify")
  //     },
  //   },
  // },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: "@vercel/webpack-asset-relocator-loader",
      options: {
        outputAssetBase: "native_modules",
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
      },
    },
  },
];
