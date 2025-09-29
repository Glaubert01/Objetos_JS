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

for (let chave in estudante) {
  const tipo = typeof estudante[chave];
  if (tipo !== "object" && tipo !== "function") {
    const texto = `A chave ${chave} tem o valor: ${estudante[chave]}`;
    console.log(texto);
  }
}
