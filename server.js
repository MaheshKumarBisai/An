// vulnerable.js

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  
  // Vulnerability 1: Command Injection (simulated)
  const exec = require('child_process').exec;
  exec(`echo ${query.input}`, (error, stdout, stderr) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(stdout);
  });

  // Vulnerability 2: Unsafe eval usage
  if (query.code) {
    eval(query.code);  // Dangerous!
  }

  // Vulnerability 3: Possible XSS (not escaped output)
  res.write(`<h1>Hello ${query.name}</h1>`);
}).listen(8080);
