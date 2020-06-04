const express = require('express');
const app = express();
console.log('saludo','hola mundo');

app.get('/', (req, res) => {
  res.send("hola mundo");
});

process.env.PORT = 80;
app.listen(process.env.PORT, () => {
  console.log('Escuchando el puerto', process.env.PORT);
})
