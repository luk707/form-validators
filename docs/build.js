var npmRun = require("npm-run");
var ghpages = require("gh-pages");
var commandLineArgs = require("command-line-args");
var execSync = require("child_process").execSync;
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var glob = require("glob");
var fs = require("fs");
var meta = require("../package.json");

const optionDefinitions = [
  { name: "publish", alias: "p", type: Boolean, defaultOption: false }
];

const options = commandLineArgs(optionDefinitions);

execSync("mkdir -p docs/tmp");
execSync("mv docs/dist/v*.json docs/tmp");
execSync("rm -rf docs/dist/*");
execSync("mkdir -p docs/dist");
execSync("cp -a docs/tmp/* docs/dist");
execSync("rm -rf docs/tmp");

npmRun.execSync(
  `typedoc --exclude "**/__tests__/**/*.ts" --json docs/dist/v${
    meta.version
  }.json ./src && touch docs/dist/.nojekyll`
);

fs.writeFileSync(
  "docs/dist/releases.json",
  JSON.stringify(
    glob
      .sync("docs/dist/v*.json")
      .reverse()
      .map(file => ({
        path: /v[0-9]+.[0-9]+.[0-9]+.json/.exec(file)[0],
        version: /[0-9]+.[0-9]+.[0-9]+/.exec(file)[0]
      })),
    null,
    4
  )
);

webpack(
  {
    entry: "./docs/app/index.js",
    output: {
      path: path.resolve("docs/dist"),
      filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["env", "react"],
              plugins: ["transform-object-rest-spread"]
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./docs/app/index.html",
        minify: { removeComments: true, collapseWhitespace: true }
      })
    ]
  },
  (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      info.errors.forEach(console.error);
    }

    if (stats.hasWarnings()) {
      info.warnings.forEach(console.warn);
    }
    console.log(
      `Built documentation bundle (${stats.endTime - stats.startTime} ms)`
    );
    if (options.publish) {
      ghpages.publish("docs/dist", { dotfiles: true }, () => {
        console.log("Successfully published documentation");
      });
    } else {
      console.log("Successfully built new documentation");
    }
  }
);
