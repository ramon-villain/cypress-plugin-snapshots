const {defineConfig} = require('cypress');
const tasks = require("../src/tasks");

module.exports = defineConfig({
    e2e: {
        "baseUrl": "http://localhost:8080",
        "excludeSpecPattern": [
            "**/__snapshots__/*",
            "**/__image_snapshots__/*"
        ],
        specPattern: ['./cypress/integration/*spec*'],
        supportFile: './cypress/support/index.js',
        setupNodeEvents(on, config) {
            on('task', tasks);
        },
    },
    "env": {
        "cypress-plugin-snapshots": {
            "serverPort": 2222,
            "diffLines": 4,
            "excludeFields": ["ignore"]
        }
    },
    "video": false,
    "viewportWidth": 660,
    "viewportHeight": 1000
});
