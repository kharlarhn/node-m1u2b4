const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const data = [
  { id:1, name: 'Carmela', email: 'mela@gmail.com', age: 25, salary:25,000 },
  { id:2, name: 'Joseph', email: 'joe@yahoo.com', age: 30, salary:45,000 },
  { id:3, name: 'James', email: 'james@msn.com', age: 35, salary:30,000 },
  { id:4, name: 'John', email: 'john@gmail.com', age: 40, salary:25,000 },
  { id:5, name: 'Frank', email: 'frank@yahoo.com', age: 45, salary:45,000 },
  { id:6, name: 'Alex', email: 'alex@msn.com', age: 21, salary:33,000 }
];

// get all data
app.get('/data', (req, res) => {
  res.json(data);
});

// get data by ID
app.get('/data/:id', (req, res) => {
  const id = req.params.id;
  const item = data.find(d => d.id == id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Not found');
  }
});

// get data by multiple route parameters
app.get('/data/:property/:value', (req, res) => {
  const property = req.params.property;
  const value = req.params.value;
  const items = data.filter(d => d[property] == value);
  if (items.length > 0) {
    res.json(items);
  } else {
    res.status(404).send('Not found');
  }
});

// create new data
app.post('/data', (req, res) => {
  const item = req.body;
  item.id = data.length + 1;
  data.push(item);
  res.status(201).json(item);
});

// update existing data
app.put('/data/:id', (req, res) => {
  const id = req.params.id;
  const index = data.findIndex(d => d.id == id);
  if (index >= 0) {
    data[index] = { ...data[index], ...req.body };
    res.json

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});