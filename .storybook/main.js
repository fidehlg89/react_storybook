module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "staticDirs": ["../public"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs"
  ],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  }
};