const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const fs = require('fs');
const path = require('path');

function getKeyValuePairs(fileContents) {
    let localeKeyValue = [];
    // Check if file contents were passed
    if (fileContents) {
        // Find the position of the return statement
        const fileLines = fileContents.split("\n");
        const returnIdx = fileLines.findIndex(line => {
            const matches = line.trim().match(/(^return|{$)/gi);
            return matches !== null && matches.length >= 2;
        });

        // Check if the index has been found
        if (returnIdx !== -1) {
            // Loop over all the lines
            for (const line of fileLines) {
                const lineVal = line.trim();
                // Get the colon location
                const colonIdx = lineVal.indexOf(":");
                if (colonIdx !== -1) {
                    const keyName = lineVal.substring(0, colonIdx);
                    let keyValue = lineVal.substring((colonIdx + 1));
                    keyValue = keyValue.trim();
                    keyValue = stripQuotes(keyValue);

                    // Add the key and value to the array
                    if (keyName && keyValue) {
                        localeKeyValue.push({
                            key: stripQuotes(keyName),
                            value: keyValue
                        });
                    }
                }
            }
        }
    }

    return localeKeyValue;
}

function stripQuotes(value) {
    // Strip the comma
    if (value.endsWith(",")) {
        value = value.substring(0, value.length - 1);
    }

    if ((value.startsWith(`'`) && value.endsWith(`'`)) ||
        (value.startsWith(`"`) && value.endsWith(`"`)) ||
        (value.startsWith("`") && value.endsWith("`"))) {
        return value.substring(1, value.length - 1);
    }

    return value;
}

const generateLocaleKeys = build.task('generateLocaleKeys', {
    execute: async (config) => {
        console.log(JSON.stringify('config = ', config));
        // IMPORTANT: Update this path or get the location from the config.json
        const srcLocPath = "./src/libraries/loc";
        const fileContents = fs.readFileSync(path.join(__dirname, `${srcLocPath}/en-us.js`), { encoding: "utf8" });
        if (fileContents) {
            const keyPairs = getKeyValuePairs(fileContents);
            if (keyPairs && keyPairs.length > 0) {
                let enumInfo = [];
                let keys = [];
                enumInfo.push(`export enum LocaleKeys {`);
                for (const keyPair of keyPairs) {
                    keys.push(`  /**
   * Label value: "${keyPair.value}"
   */
  ${keyPair.key} = "${keyPair.key}"`)
                }
                enumInfo.push(keys.join(`,\n`))
                enumInfo.push(`}`);
                fs.writeFileSync(path.join(__dirname, `${srcLocPath}/LocaleKeys.ts`), enumInfo.join(`\n`));
            }
        }
    }
});

build.rig.addPreBuildTask(generateLocaleKeys);