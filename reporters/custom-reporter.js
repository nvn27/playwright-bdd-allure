const fs = require('fs');
const util = require('util');

const logFile = fs.createWriteStream('./execution-log.log', { flags: 'a' });
// Overwrite console.log
console.log = function (message) {
    let timestamp = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()} IST`;
    logFile.write(`${timestamp}:: ` + util.format(message) + '\n');

    // Optional: still print to terminal
    process.stdout.write(util.format(message) + '\n');
};

// @implements {import('@playwright/test/reporter').Reporter} 
class CustomReporter {
    // if needed, custom options can be provided from the playwright.config.js file > reporter section
    // constructor(options) {
    //     // console.log(`custom-reporter setup with options - ${JSON.stringify(options)}`);
    // }

    onBegin(config, suite) {
        console.log(`EVENT: onBegin`);
        console.log(`STARTING THE RUN WITH ${suite.allTests().length} TESTS`);
    }

    onTestBegin(test) {
        console.log(`EVENT: onTestBegin`);
        console.log(`STARTING TEST: ${test.title}`);
    }

    // onStepBegin(test, result, step) {
    //     console.log(`EVENT: onStepBegin`);
    //     console.log(`Test title: ${(test.title)}`);
    //     console.log(`step title: ${(step.title)}`);
    // }

    // onStepEnd(test, result, step) {
    //     console.log(`EVENT: onStepEnd`);
    //     console.log(`Test title: ${(test.title)}`);
    //     console.log(`step title: ${(step.title)}`);
    // }

    onTestEnd(test, result) {
        console.log(`EVENT: onTestEnd`);
        console.log(`FINISHED TEST: ${test.title}: | STATUS: ${result.status}`);
    }

    onEnd(result) {
        console.log(`EVENT: onEnd`);
        console.log(`FINISHED THE RUN | STATUS: ${(result.status)}`);
    }

    onExit(error, workerInfo) {
        console.log(`EVENT: onExit`);
        console.log(`EXITING TEST EXECUTION | ERROR IF ANY: ${error} | WORKER INFO: ${workerInfo}`);
    }

    onError(error, workerInfo) {
        console.log(`onError: ${(error)}`);
        console.log(`onError: ${(workerInfo)}`);
    }

    onStdErr(chunk, test, result) {
        console.log(`onStdErr`);
        console.log(`chunk: ${(chunk)}`);
        console.log(`test: ${(test)}`);
        console.log(`result: ${(result)}`);
    }
}

module.exports = CustomReporter;
