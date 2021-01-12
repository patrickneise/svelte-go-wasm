/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    ["@snowpack/plugin-run-script",
    {
      "cmd": "postcss src/styles.css -o public/styles.css",
      "watch": "postcss src/styles.css -o public/styles.css -w"
    }],
    ['@snowpack/plugin-webpack',
    {outputPattern: {
      js: "bundle.js"
    },
    extendConfig: (config) => {
      delete config.optimization.splitChunks;
      delete config.optimization.runtimeChunk;
      return config;
    },}],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
