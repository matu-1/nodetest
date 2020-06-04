const express = require('express');
const app = express();
console.log('saludo','hola mundo');

app.get('/', (req, res) => {
  res.send("hola mundo");
});

app.get('/test', (req, res) => {
  res.json({nombre: 'matias'})
});

process.env.PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, function(){
  console.log('Escuchando el puerto', process.env.PORT);
})


