const http = require('http'); 
const routes = require('./routes');
const server = http.createServer(routes.reqHandling);
console.log(routes.someText)
server.listen(8035);