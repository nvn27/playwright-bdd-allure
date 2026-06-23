const fs = require('fs');
const allure = require('allure-js-commons');

class Logger {
    logFile = fs.createWriteStream('./execution-log.log', { flags: 'a' });

    async log(message, level = "INFO") {

        const line = `[${new Date().toISOString()}][${level}] > ${message}`;
        this.logFile.write(`${line}\n`);

        process.stdout.write(`${line}\n`);
        // console.log(line);
    }
}

module.exports = Logger;
