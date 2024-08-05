import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Password manager running on port ${port}`);
});



import fs from 'fs';
const path = './passwords.json';

const saveToFile = (data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf-8');
};

const readFromFile = () => {
  if (!fs.existsSync(path)) {
    return {};
  }
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data);
};

app.post('/passwords', (req, res) => {
  const { name, password } = req.body;
  const data = readFromFile();
  data[name] = password;
  saveToFile(data);
  res.status(201).send({ message: 'Password stored successfully.' });
});

