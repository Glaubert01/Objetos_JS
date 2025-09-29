const estudante = {
  nome: "João Silva",
  idade: 30,
  cpf: "123.456.789-00",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["1199999-9999", "1198888-8888"],
  media: 7.5,
  estaAprovado: function (mediaBase) {
    return this.media >= mediaBase ? true : false;
  },
};

console.log(estudante.estaAprovado(7));
