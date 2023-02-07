const { existsSync } = require('node:fs');
const { appendFile, mkdir } = require('node:fs/promises');
const { join } = require('node:path');

const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`;
    console.log(logItem);
    try {
        if (!existsSync(join(__dirname, 'logs'))) {
            await mkdir(join(__dirname, 'logs'));  
        }
        await appendFile(join(__dirname, 'logs', 'eventLog.txt'), logItem);
    } catch (err) {
        console.error(err);
    }
}

module.exports = logEvents;