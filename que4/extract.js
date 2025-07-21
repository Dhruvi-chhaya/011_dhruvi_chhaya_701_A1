const fs = require('fs');
const unzipper = require('unzipper');
const path = require('path');

// Path to the ZIP file
const zipFilePath = 'my-folder.zip'; // replace with your ZIP file
const outputDir = 'output-folder';   // folder to extract contents to

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Extract the ZIP file
fs.createReadStream(zipFilePath)
  .pipe(unzipper.Extract({ path: outputDir }))
  .on('close', () => {
    console.log(` Extraction completed to: ${outputDir}`);
  })
  .on('error', (err) => {
    console.error(' Error during extraction:', err);
  });
