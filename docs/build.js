var npmRun = require("npm-run");

npmRun.execSync(
  'typedoc --exclude "**/__tests__/**/*.ts" --out docs/dist ./src && touch docs/dist/.nojekyll',
  {}
);

console.log("done");
