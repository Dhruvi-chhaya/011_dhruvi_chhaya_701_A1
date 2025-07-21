const fs = require('fs');
const path = require('path');

const fileName = 'demo.txt';
const folderName = 'test-folder';

// 1. Write to a file
fs.writeFile(fileName, 'This is a demo file.\n', (err) => {
  if (err) throw err;
  console.log('✅ File created and written to.');

  // 2. Append to the same file
  fs.appendFile(fileName, 'Adding another line.\n', (err) => {
    if (err) throw err;
    console.log('✅ Content appended.');

    // 3. Read the file
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('📄 File content:\n', data);

      // 4. Rename the file
      const newFileName = 'renamed-demo.txt';
      fs.rename(fileName, newFileName, (err) => {
        if (err) throw err;
        console.log(`✅ File renamed to: ${newFileName}`);

        // 5. Check if file exists
        if (fs.existsSync(newFileName)) {
          console.log('✅ File exists.');

          // 6. Create a folder
          if (!fs.existsSync(folderName)) {
            fs.mkdir(folderName, (err) => {
              if (err) throw err;
              console.log(`📁 Folder created: ${folderName}`);

              // 7. Move the file into the folder
              const newPath = path.join(folderName, newFileName);
              fs.rename(newFileName, newPath, (err) => {
                if (err) throw err;
                console.log(`📂 File moved to folder: ${newPath}`);

                // 8. Delete the file
                fs.unlink(newPath, (err) => {
                  if (err) throw err;
                  console.log('🗑️ File deleted.');

                  // 9. Delete the folder
                  fs.rmdir(folderName, (err) => {
                    if (err) throw err;
                    console.log('🧹 Folder deleted.');
                  });
                });
              });
            });
          }
        }
      });
    });
  });
});