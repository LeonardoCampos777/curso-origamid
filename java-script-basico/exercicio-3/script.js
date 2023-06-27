//SELECIONAR ELEMENTOZ\\
const texto = document.querySelector('#texto');

console.log(texto);
console.dir(texto);


//PUXAR INFORMAÇÃO\\ 
console.log(texto.innerHTML);
console.log(texto.innerText);

console.log(texto.clientHeight);
console.log(texto.clientWidth);

//DEFINIR INFORMAÇÃO/ MUDAR INFORMAÇÃO\\
texto.style.backgroundColor = 'black';
texto.style.padding = '3rem';
texto.style.height = document.body.clientHeight / 2 + 'px';

texto.classList.add('ativo');
texto.setAttribute('aria-label','cursos');
