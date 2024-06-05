const plugin = require("tailwindcss/plugin");

module.exports = plugin((api) => {
  require("./utilities/area")(api);
  require("./utilities/grid-area")(api);
});
