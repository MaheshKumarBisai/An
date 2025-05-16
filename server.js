
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;

  // Safe way: do NOT use user input in exec or eval
  // Instead, just send a safe response
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello ${query.name ? query.name.replace(/</g, "&lt;").replace(/>/g, "&gt;") : 'Guest'}`);

}).listen(8080);
