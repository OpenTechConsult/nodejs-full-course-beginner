const { 
    createReadStream, 
    createWriteStream
} = require('node:fs')

const rs = createReadStream('./files/lorem.txt', {encoding: 'utf8'});
const ws = createWriteStream('./files/new-lorem.txt');

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

rs.pipe(ws);