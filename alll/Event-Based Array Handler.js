//Source code:
 var e = require('events');
 var event = new e.EventEmitter();
 function CreateFile() {
    console.log("creating a file");
    }
 function Read() {
    console.log("Reading a file");
 }
 function write(){
    console.log("writing a file");
 }
 event.addListener("IOoperations",write);
 event.addListener("IOoperation",Read);
 event.once("CreateIO",CreateFile);
 console.log(event.listenerCount("CreateIO "));
 event.emit("CreateIO");
 event.emit("IOoperations");
 event.emit("IOoperations");
 console.log(event.rawListeners("IOperations")); // this will function 
console.log(event.listenerCount("IOoperation"));
 event.removeListener("IOoperations",Read);
 event.emit("IOoperations");
 console.log(event.listenerCount("IOoperations"));
 event.emit("CreateIO");
 console.log(event.listenerCount("createIO"));