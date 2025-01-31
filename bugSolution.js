const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    await doSomethingAsync();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that sometimes fails
  if (Math.random() < 0.5) {
    throw new Error('Simulated asynchronous error');
  }
  await new Promise(resolve => setTimeout(resolve, 100));
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});