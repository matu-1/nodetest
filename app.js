const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("hola mundo");
});

app.listen(3000, () => {
  console.log('Escuchando el puerto 3000');
})

console.log('hola mundo');