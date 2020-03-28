class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.usuario = 'Fernando';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }

  static soma(a, b) {
    return a + b;
  }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();
console.log(TodoList.soma(3, 5));