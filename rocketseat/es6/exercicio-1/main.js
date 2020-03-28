const nome3 = 'Diego';
const idade3 = 23;
const usuario10 = {
 nome3,
 idade3,
 cidade: 'Rio do Sul',
};

const usuario222 = 'Diego';
const idade2 = 23;
console.log(`O usuário ${usuario222} possui ${idade2} anos`);

const usuario33 = {
 nome: 'Diego',
 idade: 23,
 endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
 }
};

const usuario332 = {...usuario33, nome: 'Gabriel' };
const usuario3332 = {...usuario33, endereco: { ...usuario33.endereco, cidade : 'Lontras' }};
console.log(usuario3332);

function somaTudo(...valores) {
  return valores.reduce((total, next) => total + next);
}
console.log(somaTudo(1, 2, 3, 4, 5, 6)); // 21
console.log(somaTudo(1, 2)); // 3

const arr32 = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr32;
console.log(x);
console.log(y);

function mostraInfo({nome, idade}) {
 return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

const empresa = {
 nome: 'Rocketseat',
 endereco: {
  cidade: 'Rio do Sul',
  estado: 'SC',
 }
};

const { nome: nome32, endereco: { cidade, estado } } = empresa;
console.log(nome32);
console.log(cidade);
console.log(estado);

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;
mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = () => new Promise((resolve, reject) =>  resolve());
promise().then(() => {
  console.log('ok');
}).catch(err => {
  console.warn(err)
});

const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(x => x.idade);
console.log(idades);

const trabalhaNaRocketseat = x => x.empresa === 'Rocketseat';
const maiorDeIdade = x => x.idade >= 18;

const trabalhadores = usuarios
  .filter(trabalhaNaRocketseat)
  .filter(maiorDeIdade);
console.log(trabalhadores);

const trabalhaNaGoogle = x => x.empresa === 'Google'
console.log(usuarios.find(trabalhaNaGoogle));

const idadeDobrada = function(x) {
  x.idade *= 2;
  return x;
 };

//const idadeDobrada = x => ({ ...x, idade: x.idade * 2 });
const idadeSuperiorA50 = x => x.idade >= 50;
console.log(usuarios.map(idadeDobrada).filter(idadeSuperiorA50));

class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }
  
  isAdmin() {
    return this.admin;
  }
}

class Admin extends Usuario {

  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
