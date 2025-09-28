// 1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.
// No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.

const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954,
  genero: "Fantasia Épica",
};
console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor}`);
console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
console.log(`Gênero: ${livro.genero}`);

// 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

let anoAtual = new Date().getFullYear();

const livro2 = {
  titulo: "1984",
  autor: "George Orwell",
  anoPublicacao: 1949,
  genero: "Distopia",
};

livro2.idadePublicacao = anoAtual - livro2.anoPublicacao;

let mostrarDetalhes = `Título: ${livro2.titulo}\nAutor: ${livro2.autor}\nAno de Publicação: ${livro2.anoPublicacao}\nGênero: ${livro2.genero}\nIdade de Publicação: ${livro2.idadePublicacao} anos`;

console.log(mostrarDetalhes);

// 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

const livro3 = {
  titulo: "O Pequeno Príncipe",
  autor: "Antoine de Saint-Exupéry",
  anoPublicacao: 1943,
  genero: "Fábula",
  idadePublicacao: anoAtual - 1943,
};
console.log(`Título: ${livro3["titulo"]}`);
console.log(`Autor: ${livro3["autor"]}`);
console.log(`Ano de Publicação: ${livro3["anoPublicacao"]}`);
console.log(`Gênero: ${livro3["genero"]}`);
console.log(`Idade de Publicação: ${livro3["idadePublicacao"]} anos`);

// 4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

// No final do arquivo livro.js, adicione uma avaliação ao objeto.

// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

const livro4 = {
  titulo: "A Menina que Roubava Livros",
  autor: "Markus Zusak",
  anoPublicacao: 2005,
  genero: "Ficção Histórica",
  idadePublicacao: anoAtual - 2005,
  avaliacao: null,
};
if (livro4.avaliacao === null) {
  livro4.avaliacao = 4.5;
  console.log(`Avaliação adicionada: ${livro4.avaliacao}`);
} else {
  console.log("O livro já possui uma avaliação.");
}

// 5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".

const livro5 = {
  titulo: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
  autor: "C.S. Lewis",
  anoPublicacao: 1950,
  genero: "Fantasia",
  idadePublicacao: anoAtual - 1950,
};
console.log(`Gênero antes da alteração: ${livro5.genero}`);
livro5.genero = "Aventura";
console.log(`Gênero após a alteração: ${livro5.genero}`);

// 6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.

const livro6 = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1937,
  genero: "Fantasia",
  idadePublicacao: anoAtual - 1937,
  avaliacao: 4.8,
};
console.log("Detalhes do livro antes de excluir a avaliação:");
console.log(`Título: ${livro6.titulo}`);
console.log(`Autor: ${livro6.autor}`);
console.log(`Ano de Publicação: ${livro6.anoPublicacao}`);
console.log(`Gênero: ${livro6.genero}`);
console.log(`Idade de Publicação: ${livro6.idadePublicacao} anos`);
console.log(`Avaliação: ${livro6.avaliacao}`);
delete livro6.avaliacao;
console.log("Detalhes do livro após excluir a avaliação:");
console.log(`Título: ${livro6.titulo}`);
console.log(`Autor: ${livro6.autor}`);
console.log(`Ano de Publicação: ${livro6.anoPublicacao}`);
console.log(`Gênero: ${livro6.genero}`);
console.log(`Idade de Publicação: ${livro6.idadePublicacao} anos`);
console.log(`Avaliação: ${livro6.avaliacao}`); // Deve exibir undefined, pois a propriedade foi excluída.
