const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('API funcionando para validacion DevOps');
});

app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});
