var e = require('events');
var event = new e.EventEmitter();
function Tea() {
    console.log("Making Tea");
    event.emit("gason");

}

event.addListener("tea",Tea);
function gason () {
    console.log("put the gas on ....");
    event.emit("boilwater");

}

event.addListener("gason",gason);
function boilwater() {
    console.log("let the water boil");
    event.emit("addtea");

}
event.addListener("boilwater",boilwater);
function addtea() {
    console.log("adding tea leaves in the water");
    event.emit('milkandsugar');

}
 event.addListener("addtea",addtea);
 function milkandsugar() {
    console.log("Adding milk and sugar");
    console.log("tea is ready");

 }
 event.addListener("milkandsugar",milkandsugar);
 event.emit("tea");