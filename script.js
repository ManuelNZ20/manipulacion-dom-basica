// Formas de leer un elemento en html
// Manipulación del DOM
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName(".parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({ h1, p, parrafito, pid, input });

// Nos permite modificar el html
// innerHTML nos permite modificar todo a código html
h1.innerHTML = "Lobito <br> Red";
// innerText nos permite modificar unicamente el texto
h1.innerText = "Lobito <br> Red";

// console.log(h1.getAttribute('pantalla'))
// // modifica los atributos que posee un objeto
// h1.setAttribute('class','rojo')

h1.classList.add("rojo");
h1.classList.remove("verde");
// h1.classList.toggle('verde')
// h1.classList.contains('verde')

// input.value = 'Manuel'
input.placeholder = "Hola,Escribe un nombre";

// Nos ayuda a crear un elemento html que nosotros querramos
console.log(document.createElement("img"));

const img = document.createElement("img");
img.setAttribute('src','https://m.media-amazon.com/images/M/MV5BMTk4NTk4MTk1OF5BMl5BanBnXkFtZTcwNTE2MDIwNA@@._V1_.jpg')
console.log(img)

pid.innerHTML = ""
pid.append(img)

// Escuchar eventos