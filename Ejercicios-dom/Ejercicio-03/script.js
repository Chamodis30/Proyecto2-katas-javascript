// 1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul1 = document.createElement("ul");
for (let country of countries) {
  const li = document.createElement("li");
  li.textContent = country;
  ul1.appendChild(li);
}
document.body.appendChild(ul1);

// 1.2
document.querySelector(".fn-remove-me").remove();

// 1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ul2 = document.createElement("ul");
const container = document.querySelector('[data-function="printHere"]');

for (let car of cars) {
  const li = document.createElement("li");
  li.textContent = car;
  ul2.appendChild(li);
}
container.appendChild(ul2);

// 1.4
const countries2 = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const wrapper = document.createElement("div");

for (let item of countries2) {
  const div = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = item.title;

  const img = document.createElement("img");
  img.src = item.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);

  wrapper.appendChild(div);
}
document.body.appendChild(wrapper);

// 1.5 botón eliminar último
const btnDeleteLast = document.createElement("button");
btnDeleteLast.textContent = "Eliminar último";

btnDeleteLast.addEventListener("click", () => {
  wrapper.lastChild?.remove();
});

document.body.appendChild(btnDeleteLast);

// 1.6 botón eliminar cada uno
wrapper.querySelectorAll("div").forEach(div => {
  const btn = document.createElement("button");
  btn.textContent = "Eliminar este";

  btn.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(btn);
});