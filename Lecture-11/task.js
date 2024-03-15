const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
var q = new url(req.url, 'http://localhost');
var filename = "." + q.pathname;

  fs.writeFile(filename, 'hey', (err) => {
    if(err){
      res.end('Some error occurred');
    }
    else{
      res.end('File created successfully');
    }

  });

});

server.listen(8000, () => {
  console.log('Server is running on port 8000');
});
