var { URL } = require('url');
var adr = 'http://localhost:8000/default.htm?name=Ash&Age=19';
var q = new URL(adr);// This line of code creates a new instance of the URL object by calling its constructor with the argument adr
console.log(q.protocol); // returns 'http:'
console.log(q.hostname); // returns 'localhost'
console.log(q.port); // returns '8000'
console.log(q.host); // returns 'localhost:8000'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?name=Ash&Age=19'
console.log(q.href); // returns 'http://localhost:8000/default.htm?name=Ash&Age=19'
console.log(q.searchParams.get('name')); // returns 'Ash'
console.log(q.searchParams.get('Age')); // returns '19'