const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'y3nfzn',
  viewportWidth: 1200,
  viewportHeight: 660,
  defaultCommandTimeout: 10000,

  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// module.exports = {
//   e2e: {
//     experimentalModifyObstructiveThirdPartyCode: true,
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// };