const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    console.error('Error:', error);
    // This will only log the error but not properly handle it.
    // The response to the client will be incomplete or missing
  });
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that sometimes fails
  // In a real-world scenario, this could be a database query, an external API call, or file system access.
  if (Math.random() < 0.5) {
    throw new Error('Simulated asynchronous error');
  }
  // Simulate some delay
  await new Promise(resolve => setTimeout(resolve, 100));
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});