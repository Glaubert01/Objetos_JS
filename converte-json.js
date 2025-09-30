const estudante = require("./estudante.json");

const stringEstudante = JSON.stringify(estudante);
// console.log(typeof stringEstudante);
// console.log(stringEstudante);

const objEstudante = JSON.parse(stringEstudante);

console.log(typeof objEstudante);
console.log(objEstudante);
console.log(objEstudante.nome);
