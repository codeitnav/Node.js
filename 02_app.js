/*
const tutorial = require('./tutorial')
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObj());
*/

// the Events Module and EventEmitter Class - brings event driven module into node module

// the EventEmitter class is imported from Node.js's built-in events module.
const EventEmitter = require('events')

// A new instance of the EventEmitter class is created, and eventEmitter now behaves as an object that you can attach listeners to and emit events from.
const eventEmitter = new EventEmitter();

/* .on takes 2 arguments
1st is the listerner that you want to attach to this object
2nd is the function that you want to execute
*/
eventEmitter.on('tutorial_1', ()=>{
    console.log('tutorial_1 event has occurred');
});
eventEmitter.emit('tutorial_1');

// passing parameters
eventEmitter.on('tutorial_2', (num1, num2)=>{
    console.log('sum of num1 and num2 using tutorial_2 -->', num1+num2);
});
eventEmitter.emit('tutorial_2', 1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
let sam = new Person('sam');
sam.on('nam', ()=>{
    console.log('name '+ sam.name);
})
pedro.on('name', () => {
    console.log('name '+ pedro.name);
})

pedro.emit('name');
sam.emit('name');