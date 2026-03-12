const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'Todo salió bien!',
  });
});

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
