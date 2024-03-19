const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ifkdqm',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  
    "e2e": {
      "experimentalStudio": true,
      "chromeWebSecurity": false,
      "video": true,
      "projectId": "ifkdqm",
      "recordKey": "41580c33-6ab1-4a8d-af05-77ed9fdeeb94",
      "defaultCommandTimeout" : 40000
      
     }

    
}
  
);