import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    supportFile: 'cypress/support/component.js',
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
