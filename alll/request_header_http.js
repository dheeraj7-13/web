//REQUEST HEADER RESPONSE:
//SOURCE CODE:
var http = require('http');
var util = require('util');
http.createServer(function(req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write(util.inspect(req.headers));
   res.write('<html><body><h1>Home Page</h1></body></html>');
   console.log('Server running at http://localhost:8080/');
   res.end();
}).listen(8080, () => {
   console.log('Server is listening on port 8080');
});