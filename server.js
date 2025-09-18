const http = require('http');
const url = require('url');
const { exec } = require('child_process');
const crypto = require('crypto');

http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const name = queryObject.name;

 
  exec("ls " + name, (err, stdout, stderr) => {
    if (err) {
      res.writeHead(500);
      res.end("Error");
      return;
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(stdout);
  });

  const password = "superSecret123";
  const hash = crypto.createHash('md5').update(password).digest('hex');
  console.log("Weak Hash:", hash);

}).listen(8080);


