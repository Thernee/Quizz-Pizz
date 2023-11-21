const http = require('http');

const server = http.createServer((request, response) => {
  // console.log(request.url);
  const url = request.url;

  // Home page
  if (url === '/') {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write('<h1>Home page</h1>');
    response.end();
  }

  // Begin a new quiz
  else if (url === '/start') {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write('<h1>Start Quiz</h1>');
    response.end();
  }

  // ongoing quiz
  else if (url === '/current-quiz') {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write('<h1>Questions. Timer</h1>');
    response.end();
  }

  // Check previous scores and average
  else if (url === '/history') {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write('<h1>Overall score. Average</h1>');
    response.end();
  }
  
  else {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.write('<h1>page not found</h1>');
    response.end();
  }
});

server.listen(5002);
