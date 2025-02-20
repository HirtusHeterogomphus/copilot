// Create web server
// Create a web server that listens on port 3000. When you visit the root URL, it should display "Welcome to the main page!" When you visit the URL /about, it should display "Welcome to the about page!" When you visit any other URL, it should display "Page not found".

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  if (path === '/') {
    res.write('Welcome to the main page!');
  } else if (path === '/about') {
    res.write('Welcome to the about page!');
  } else {
    res.write('Page not found');
  }
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});