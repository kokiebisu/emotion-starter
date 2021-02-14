const path = require("path");

module.exports = {
  mode: "production",
  entry: "./lib/atoms.tsx",
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist"),
    library: "emotion-starter-template",
    libraryTarget: "umd",
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.tsx$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  externals: {
    react: "react",
  },
};
