const port = 3333;

const app = require('./app');

app.listen(port, function() {
  console.log(`Executando na porta ${port}`);
});
