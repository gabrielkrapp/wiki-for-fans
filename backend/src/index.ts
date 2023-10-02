import express from 'express';
import fs from 'fs';
import path from 'path';
import { AnimeDatabase } from './types';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.use('/images', express.static(path.join(__dirname, '..', 'images'))); 

const dataPath = path.join(__dirname, '..' ,'database.json');

const rawData = fs.readFileSync(dataPath, 'utf-8');

const data: AnimeDatabase = JSON.parse(rawData);

const cors = require('cors');
app.use(cors());


app.get('/naruto', (req, res) => {
  const characters = data.naruto.map(char => ({
    name: char.name,
    firstName: char.firstName,
    image: char.image
  }));
  res.json(characters);
});

app.get('/character/:characterFirstName', (req, res) => {
  const character = data.naruto.find(char => char.firstName.toLowerCase() === req.params.characterFirstName.toLowerCase());
  
  if(character) {
    res.json(character);
  } else {
    res.status(404).send('Character not found');
  }
});