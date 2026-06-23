const fs = require('fs');
const path = require('path');

class Utils {
    async cleanupAllureReport() {
        const resultsDir = './allure-results';
        const files = fs.readdirSync(resultsDir).filter(f => f.endsWith('-result.json'));

        for (const file of files) {
            const filePath = path.join(resultsDir, file);
            const result = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

            // Remove all labels
            result.labels = [];

            // Remove all parameters
            // result.parameters = [];
            result.paramaters = (result.parameters || []).filter(
                param => !['Project'].includes(param.name)
            );

            // OR remove only specific label types // result.labels
            result.labels = (result.labels || []).filter(
                label => !['feature', 'story', 'tag', 'suite', 'epic', 'parentsuite'].includes(label.name)
            );

            fs.writeFileSync(filePath, JSON.stringify(result, null, 2));
        }
    }
}

module.exports = Utils;
