module.exports = {
  stories: ["../packages/atoms/lib/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.tsx$i/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      ],
    });

    config.resolve.extensions = [".tsx", ".ts", ".js"];
    return config;
  },
};
