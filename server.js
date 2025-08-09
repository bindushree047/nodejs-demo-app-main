const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Node.js App running with CI/CD and Docker!\n');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
