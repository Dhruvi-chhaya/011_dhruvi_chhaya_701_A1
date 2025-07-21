const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

// Folder to zip
const folderToZip = 'my-folder'; // replace with your folder name
const outputZipFile = 'my-folder.zip'; // name of the output ZIP

// Create a file to stream archive data to.
const output = fs.createWriteStream(outputZipFile);
const archive = archiver('zip', {
  zlib: { level: 9 } // Maximum compression
});

// Listen for archive completion
output.on('close', () => {
  console.log(`✅ Archive created: ${outputZipFile} (${archive.pointer()} total bytes)`);
});

// Handle errors
archive.on('error', err => {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Append the entire folder (recursively)
archive.directory(folderToZip, false);

// Finalize the archive (i.e., finish writing files)
archive.finalize();
