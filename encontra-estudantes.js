const estudantes = require("./estudantes.json");

function buscaInformacao(lista, chave, valor) {
  return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEcontrado = buscaInformacao(estudantes, "nome", "Juliet");
console.log(estudanteEcontrado);
const telefoneEcontrado = buscaInformacao(estudantes, "telefone", "1198123183");
console.log(telefoneEcontrado);
