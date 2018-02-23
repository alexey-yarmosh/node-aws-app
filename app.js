const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  console.log('User onnected!');
  res.end('Hello World!');
}).listen(PORT);

console.log(`Server started on ${PORT}`);
