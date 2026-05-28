const fs = require('fs');
const path = require('path');

async function globalSetup() {
    console.log(`=================== BEGINNING TEST EXECUTION - ${new Date()} ===================`);

    let dirs = ['./allure-results', './allure-report'];

    dirs.forEach(dir => {
        // Check if directory exists
        if (fs.existsSync(dir)) {
            // Delete directory recursively
            fs.rmSync(dir, { recursive: true, force: true, });
            console.log(`Deleted directory: ${dir}`);
        } else {
            console.log(`Directory does not exist: ${dir}`);
        }
    });
}

module.exports = globalSetup;
