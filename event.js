const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
eventEmitter.on('greet',()=>{
    console.log("Good Morning ");
});
eventEmitter.emit('greet');