exports.config = {
    runner: 'local',
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: "Android",
        platformVersion: "11.0",
        deviceName: "Android Emulator",
        app: "/path/to/your/app.apk",
        automationName: "UiAutomator2"
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
