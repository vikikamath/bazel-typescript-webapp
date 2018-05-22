exports.config = {
    specs: ['./app_e2e_test.ts'],
    capabilities: {browserName: 'chrome', chromeOptions: {args: ['--no-sandbox']}},
    directConnect: true,
    baseUrl: 'http://localhost:5432/',
    framework: 'jasmine2',
    getPageTimeout: 60 * 1000,
    allScriptsTimeout: 60 * 1000,
    beforeLaunch: function() { // If you're using type script then you need compiler options
        require('ts-node').register({
            project: 'tsconfig.json'
        });
    },
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    },
  };