const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Home page');
});

app.get('/start', (request, response) => {
  response.send('Start quiz');
});

app.get('/current-quiz', (request, response) => {
  response.send('Ongoing quiz');
});

app.get('/history', (request, response) => {
  response.send('Overall score. Average');
});

app.all('*', (request, response) => {
  response.status(404).send("<h1>Page not found</h1>");
});



app.listen(5002, () => {
  console.log('Listening on port 5002');
});
