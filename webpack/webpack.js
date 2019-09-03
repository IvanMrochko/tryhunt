const merge = require("deepmerge");

/**
 * Root path
 */
exports.root = pathname => require("path").join(__dirname, "../" + pathname);

/**
 * Env variables
 */
exports.enviroments = {
  port: 8080
};
