module.exports = {
  stories: ["../packages/atoms/lib/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.resolve.extensions = [".tsx", ".ts", ".js"];
    return config;
  },
};
