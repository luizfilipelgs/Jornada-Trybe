const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
  
  // Adicione o código do exercício aqui:

const authorBornIn1947 = (listaBooks) => {
    return listaBooks.find(element => element.author.birthYear === 1947).author.name;
}

console.log(`nome da primeira pessoa autora do livro nascida no ano de 1947: ${authorBornIn1947(books)}`);


const smallerName = (listaBooks) => {
    let nameBook;

    listaBooks.forEach(element => {
        if (!nameBook || element.name.length < nameBook.length) {
        nameBook = element.name
        }
    });
    return nameBook;
}

console.log(`Livro de menor nome: ${smallerName(books)}`);

const getNamedBook = (listaBooks) => {
    let nameBook;

    listaBooks.find(element => {
        if (!nameBook || element.name.length === 20 ) {
            nameBook = element.name;
        }
    })
    return nameBook
}

console.log(`primeiro livro cujo nome possui 20 caracteres: ${getNamedBook(books)}`);