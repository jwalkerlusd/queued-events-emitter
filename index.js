const EventEmitter = require('events');

// define Event object
class Event {
    constructor(eventName, ...args) {
        this.eventName = eventName;
        this.args = args;
    }
}

// TODO define the class QueuedEventEmitter extend EventEmitter
// TODO define method .run(EventQueue)

class QueuedEventEmitter extends EventEmitter {
    constructor() {
        super();
    }

    run(eventQueue) {
        eventQueue.forEach(event => {
            return super.emit(event.eventName, ...event.args);
        });
    }
}

// TODO define the class EventQueue, extend Array
// TODO override method .push(eventName[, ...args]) to add event to itself

class EventQueue extends Array {
    push(eventName, ...args) {
        return super.push(new Event(eventName, ...args));
    }
}

// TODO export both classes
module.exports = { EventQueue, QueuedEventEmitter };