//TO OPEN PDF FILE ON BROWSER:
 //source code:
 var http = require('http');
var fs = require('fs');
 fs.readFile('PRAC.pdf', function(err, pdf) {
    if (err) throw err;
    http.createServer(function(req, res) {
        res.writeHead(200, { 'Content-Type': 'application/pdf' });
        res.write(pdf);
        res.end();
    }).listen(8085, () => {
        console.log('Server running at http://localhost:8085/');
    });
 });