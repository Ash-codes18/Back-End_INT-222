var http = require('http');
var { URL } = require('url'); // Using object destructuring to get the URL constructor
var fs = require('fs');
var server = http.createServer(function (req, res) {
var q = new URL(req.url, 'http://loclhost'); // Creating a new URL object
var filename = "." + q.pathname;
fs.readFile(filename, function(err, data) {
if (err) {
// res.writeHead(404, {'Content-Type': 'text/html'});
res.end("404 Not Found");
}
// res.writeHead(200, {'Content-Type': 'text/html'});
res.end(data);
});
});
server.listen(8000);