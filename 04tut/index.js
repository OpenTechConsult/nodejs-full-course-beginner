const EventEmitter = require('node:events');

const logEvents = require('./logEvents');

class MyEmitter extends EventEmitter {};

// initialize event emitter object
const myEmitter = new MyEmitter();

// add a listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    // emit event
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);