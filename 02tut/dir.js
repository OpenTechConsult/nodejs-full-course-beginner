const { mkdir} = require('node:fs/promises');
const { existsSync, rmdir  } = require('node:fs');

if (!existsSync('./new')) {

    mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created');
    })
}

// code that delete the new directory
if (existsSync('./new')) {
    rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory removed');
    })
}