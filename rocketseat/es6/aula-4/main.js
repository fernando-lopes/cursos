// SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
  nome: 'Fernando',
  idade: 23,
  empresa: 'Rocketseat',
};

const usuario2 = {...usuario1, nome: 'Eduarda'};

console.log(usuario2);


// REST
const usuario = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat',
};

const { nome, ...resto } = usuario;

const arr = [1, 2, 3, 4];

const [ a, b, ...c] = arr;

function soma(a, b, ...params) {
  return a + b + params.reduce((total, next) => total + next);
}