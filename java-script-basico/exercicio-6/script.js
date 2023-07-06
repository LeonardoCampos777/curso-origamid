// FUNÇÕES //

function logCurso(){
  const nome = 'JavaScript';
  const horas = '40 horas';
  console.log(nome, horas);
}

logCurso();
logCurso();
logCurso();



// PARÂMETRO E ARGUMENTO //

// nome e horas são parâmetros //
function logCurso(nome, horas){
  console.log(nome, horas, 'horas');
}

// JavaScript e 40 são argumentos //
logCurso('JavaScript','40');
logCurso('HTML', '20');
logCurso('CSS', '30');


// RETORNO //

function logCurso(nome, horas){
  console.log(nome, horas);
  return nome + horas + 'Log';
}

const valor = logCurso('JavaScript', '40');
console.log(valor);


const nome = 'JavaScript-2';

function logCursos(){
  console.log(nome);
}

logCursos();


function logLivro(){
  const livro = 'O senhor dos Anéis';
  console.log(livro);
}

console.log(livro);