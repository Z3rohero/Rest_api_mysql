import express from "express";

const app = express();

app.listen(3000);

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
