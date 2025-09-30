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

const chavesDoObjeto = Object.keys(estudante);
console.log(chavesDoObjeto); // [ 'nome', 'idade', 'cpf', 'turma', 'bolsista', 'telefones', 'enderecos' ]

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Ops, não existe esse campo");
} else {
  console.log("Campo endereços existe");
}
