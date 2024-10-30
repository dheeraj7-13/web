var e = require('events');
var event = new e.EventEmitter();

event.on("calculatesalary", (basic) => {
    var hra = basic * 0.6; // HRA is 60% of basic
    var da = basic; // Dearness Allowance
    var pt = 200; // Profession Tax
    var it = basic; // Income Tax
    var gross = basic + hra + da; // Gross Salary calculation
    var net = gross - (pt + it); // Net Salary calculation

    console.log(`Basic Salary : ${basic}`);
    console.log(`Dearness Allowance : ${da}`);
    console.log(`HRA : ${hra}`);
    console.log(`Profession Tax: ${pt}`);
    console.log(`Income Tax: ${it}`);
    console.log(`Gross Salary  : ${gross}`);
    console.log(`Net Salary : ${net}`);
});

// Example of emitting the event with a basic salary
event.emit("calculatesalary", 10000); // Example basic salary
