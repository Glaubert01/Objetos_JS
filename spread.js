const estudante = {
  nome: "João Silva",
  idade: 30,
  cpf: "123.456.789-00",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["1199999-9999", "1198888-8888"],
  enderecos: [
    {
      rua: "Rua dos pinheiros",
      numero: 1293,
      bairro: "Centro",
      cidade: "São Paulo",
      estado: "SP",
      complemento: "ap 934",
    },
    {
      rua: "Avenida dos estados",
      numero: 5000,
      bairro: "Bela Vista",
      cidade: "São Paulo",
      estado: "SP",
      complemento: null,
    },
  ],
};

function exibirTelefones(telefone1, telefone2) {
  console.log("Telefone 1:", telefone1);
  console.log("Telefone 2:", telefone2);
}
exibirTelefones(...estudante.telefones);

const dadosEnvio = {
  destinatario: estudante.nome,
  ...estudante.enderecos[0],
};

console.log(dadosEnvio);
