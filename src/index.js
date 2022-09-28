import express from "express";
import { conne } from './db/connect.js';
const app = express();

app.listen(3000);

app.get('/ping', async (req, res) => {
  const [result] = await conne.query('select 1 + 1 as result')
  res.json(result)

});

app.get('/', (req, res) =>
  res.send("hello word serve")
);

app.post('/', (req, res) =>
  res.send("hello word serve")
);

app.put('/', (req, res) =>
  res.send("hello word serve")
);

app.delete('/', (req, res) =>
  res.send("hello word serve")
);







//app.routes ("/", (rest, ))
