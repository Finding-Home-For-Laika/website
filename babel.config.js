module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-env"];
  const plugins = ["@babel/plugin-transform-logical-assignment-operators"];
  const ignore = ["node_modules"];

  return {
    presets,
    plugins,
    ignore,
  };
};
