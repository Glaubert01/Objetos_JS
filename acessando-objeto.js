const estudante = {
  nome: "João Silva",
  idade: 30,
  cpf: "123.456.789-00",
  turma: "JavaScript",
};

function exibeInfoEstudante(objEstudante, infoEstudante) {
  return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, "nome"));
console.log(exibeInfoEstudante(estudante, "cpf"));
