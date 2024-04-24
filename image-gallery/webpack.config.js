// webpack.config.js
const Dotenv = require('dotenv-webpack');

module.exports = {
    // Your existing webpack configuration
    plugins: [
        new Dotenv(),
        // Other plugins...
    ],
};
