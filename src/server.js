const express = require("express");

const server = express();
const port = 7000;

// Localhost:7000
server.listen(port, () => {
  console.log(`Aplicação está lançada na porta ${port}.`);
});
