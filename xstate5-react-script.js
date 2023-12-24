// xstate5-react-script.js
const fs = require("fs-extra");
const path = require("path");

const rootNodeModules = path.join(__dirname, "node_modules");

fs.ensureSymlinkSync(
  path.join(rootNodeModules, "xstate-v5"),
  path.join(rootNodeModules, "@xstate-v5", "react", "node_modules", "xstate"),
);
