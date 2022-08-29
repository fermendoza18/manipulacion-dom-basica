// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.querySelector('#pid');
// const input = document.querySelector('input');

// console.log({
//   h1,
//   p,
//   parrafito,
//   pid,
//   input,
// });

// h1.innerHTML = 'Chiste <br> Malo';
// h1.innerText = 'Chiste <br> Malo';
// // console.log(h1.getAttribute('atributo'));
// // h1.setAttribute('atributo', 'rojo');

// h1.classList.add('rojo');

// input.value = "456";

// const img = document.createElement('img');
// img.setAttribute('src', 'https://picsum.photos/200');

// pid.append(img);

const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
  // console.log({event});
  event.preventDefault();

  const sumaInputs = Number(input1.value) + Number(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs; 
}