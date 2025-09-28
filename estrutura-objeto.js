const estudante = {
  nome: "João Silva",
  idade: 30,
  cpf: "123.456.789-00",
  turma: "JavaScript",
};

console.log(estudante.nome);
console.log(
  `O nome do estudante é ${estudante.nome} e sua idade é ${estudante.idade} anos.`
);
console.log(
  `Os tres primeiros digitos do cpf são ${estudante.cpf.substring(0, 3)}`
);
