const fs = require('fs');
const util = require('util');
const Logger = require('../logger/logger.js');
const Utility = require('../utility/utils.js')

const logger = new Logger();
const utils = new Utility();

// const logFile = fs.createWriteStream('./execution-log.log', { flags: 'a' });

// // Overwrite console.log
// console.log = function (message) {
//     let timestamp = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()} IST`;
//     logFile.write(`${timestamp}:: ` + util.format(message) + '\n');

//     // Optional: still print to terminal
//     process.stdout.write(util.format(message) + '\n');
// };

// @implements {import('@playwright/test/reporter').Reporter} 
class CustomReporter {
    // if needed, custom options can be provided from the playwright.config.js file > reporter section
    // constructor(options) {
    //     // logger.log(`custom-reporter setup with options - ${JSON.stringify(options)}`);
    // }

    onBegin(config, suite) {
        logger.log(`EVENT: onBegin`);
        logger.log(`STARTING THE RUN WITH ${suite.allTests().length} TESTS`);
    }

    onTestBegin(test) {
        logger.log(`EVENT: onTestBegin`);
        logger.log(`STARTING TEST: ${test.title}`);
    }

    // onStepBegin(test, result, step) {
    //     logger.log(`EVENT: onStepBegin`);
    //     logger.log(`Test title: ${(test.title)}`);
    //     logger.log(`step title: ${(step.title)}`);
    // }

    // onStepEnd(test, result, step) {
    //     logger.log(`EVENT: onStepEnd`);
    //     logger.log(`Test title: ${(test.title)}`);
    //     logger.log(`step title: ${(step.title)}`);
    // }

    onTestEnd(test, result) {
        logger.log(`EVENT: onTestEnd`);
        logger.log(`FINISHED TEST: ${test.title}: | STATUS: ${result.status}`);
    }

    onEnd(result) {
        utils.cleanupAllureReport();

        logger.log(`EVENT: onEnd`);
        logger.log(`FINISHED THE RUN | STATUS: ${(result.status)}`);
    }

    onExit(error, workerInfo) {
        logger.log(`EVENT: onExit`);
        logger.log(`EXITING TEST EXECUTION | ERROR IF ANY: ${error} | WORKER INFO: ${workerInfo}`);
    }

    onError(error, workerInfo) {
        logger.log(`onError: ${(error)}`);
        logger.log(`onError: ${(workerInfo)}`);
    }

    onStdErr(chunk, test, result) {
        logger.log(`onStdErr`);
        logger.log(`chunk: ${(chunk)}`);
        logger.log(`test: ${(test)}`);
        logger.log(`result: ${(result)}`);
    }
}

module.exports = CustomReporter;
