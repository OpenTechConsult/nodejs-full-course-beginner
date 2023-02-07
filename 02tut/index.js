const fs = require('fs');
const { readFile, writeFile, appendFile, rename, unlink } = require('node:fs/promises');
const path = require('path');

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// })


// reading a file using the fs/promise api
const fileOps = async () => {
  try {
    const filePath = path.join(__dirname, 'files', 'starter.txt');
    const fileToWriteTo = path.join(__dirname, 'files', 'promiseWrite.txt');
    const newFileName = path.join(__dirname, 'files', 'promiseComplete.txt');
    const data = await readFile(filePath, { encoding: 'utf8' });
    console.log(data);
    await unlink(filePath);
    await writeFile(fileToWriteTo, data);
    await appendFile(fileToWriteTo, '\n\nNice to meet you');
    await rename(fileToWriteTo, newFileName);
    const newData = await readFile(newFileName, { encoding: 'utf8' });
    console.log(newData);

  } catch (err) {
    console.error(err.message);
  }
}

fileOps()

// console.log('Hello...');

// write to a file
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you',(err) => {
//   if (err) { 
//     throw err;
//   }
//   console.log('Write complete');

//   // append to a file
//   fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('Append complete');

//     // renaming the file
//     fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newFile.txt'), (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log('Renaming complete')
//     })
//   })
// })



// exit on uncaught errors
process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
})