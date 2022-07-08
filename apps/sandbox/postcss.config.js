/**
 * https://nx.dev/guides/using-tailwind-css-in-react#using-tailwind-css-in-react
 */

// import node_modules
const { join } = require('path');

// export postcss config
module.exports = {
  plugins: {
    tailwindcss: { config: join(__dirname, 'tailwind.config.js') },
    autoprefixer: {},
  },
};
