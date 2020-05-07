const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório";
mongoose.Error.messages.Number.min =
  "O '{VALUE}' informado é menor que o limite mínimo de '${MIN}'";
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é máximo de '${MAX}'";
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'";

module.exports = mongoose.connect('mongodb://localhost/mymoney', {
  useMongoClient: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});