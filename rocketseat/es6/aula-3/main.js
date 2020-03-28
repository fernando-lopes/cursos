const usuario = {
  nome: 'Fernando Lopes',
  idade: 28, 
  endereco: {
    cidade: 'Marília',
    estado: 'SP',
  },
};

function mostraNome({ nome: id, idade, endereco: { cidade, estado } }) {
  console.log(id, idade, cidade, estado);
}

mostraNome(usuario);