const nome = 'O Senhor dos Anéis';
const ano = '1954';
const autor = 'J. R. R. Tolkien';


const nomeFilme = 'O Senhor dos Anéis';
const anoFilme = '2001';
const diretorFilme = 'Peter Jackson';


const livro = {
  nome: 'O senhor dos Anéis',
  ano: 1954,
  autor: 'J. R. R. Tolkien',
};

const filme = {
  nome: 'O senhor dos Anéis',
  ano: 2001,
  diretor: 'Peter Jackson',
};

console.log(livro.autor);
console.log(filme);
console.log(livro);


console.dir(console);

const name = 'O senhor dos Anéis';
const nomeMaiusculo = nome.toUpperCase();
const totalLetras = nome.length;

console.log(name);
console.log(nomeMaiusculo);
console.log(totalLetras);


const preco = 2.99;
const precoArrendondado = 'R$' + preco.toFixed();

console.log(preco);
console.log(precoArrendondado);



console.log(autor.length);
console.log(autor.toUpperCase());
console.log(autor.toLowerCase());


const texto = document.querySelector('.texto');
texto.style.backgroundColor = 'black';
texto.classList.add('ativo');
texto.classList.add('fonte-grande');
texto.classList.add('padding');


console.log(texto.innerHTML);
console.log(texto.clientHeight);