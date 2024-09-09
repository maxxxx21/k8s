const http = require('http');
const os = require('os');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const ip = req.socket.localAddress;
  const currentTime = new Date().toLocaleString();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`IP address of the container is: ${ip}\nCurrent time is: ${currentTime}\n`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
