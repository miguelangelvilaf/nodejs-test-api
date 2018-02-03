'use strict';

const express = require('express');
const bodyParser = require('body-parser');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  //res.send('Node.js Web App\n - Test a POST request.\n - You\'re using GET method.\n');
  res.json({"name": "mavila/node-web-app", "version": "1.0.0", "description": "Test a POST request", "error": "You're using GET method"});
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
  
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
