// C Event Calculator using arrow function
//  source code:
 var e = require('events');
 var event = new e.EventEmitter();
 event.on("div", (no1, no2) => {
    console.log(`${no1}/${no2}=${no1/no2}`);
 });
 event.on("add", (no1, no2) => {
    console.log(`${no1}+${no2}=${no1+no2}`);  // Fixed: Changed no1/no2 to no1+no2
 });
 event.on("mod", (no1, no2) => {
    console.log(`${no1}%${no2}=${no1%no2}`);  // Fixed: Changed no1/no2 to no1%no2
 });
 event.on("sqrt", (no1) => {  // no2 is not needed here
    console.log(`Squareroot of ${no1} = ${Math.sqrt(no1)}`);  // Fixed: Corrected the square root 
calculation
 });
 event.emit("div", 50, 10);
 event.emit("add", 10, 20);
 event.emit("sqrt", 25);
 event.emit("mod", 35, 2);
 