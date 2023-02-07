const { existsSync } = require('node:fs');
const { appendFile, mkdir } = require('node:fs/promises');
const { join } = require('node:path');

const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`;
    console.log(logItem);
    try {
        if (!existsSync(join(__dirname, '..', 'logs'))) {
            await mkdir(join(__dirname, '..', 'logs'));  
        }
        await appendFile(join(__dirname, '..', 'logs', logName), logItem);
    } catch (err) {
        console.error(err);
    }
}

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
    console.log(`${req.method} ${req.path}`);
    next();
}

module.exports = {logger, logEvents};