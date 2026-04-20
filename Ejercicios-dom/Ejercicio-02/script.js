// 2.1
const div1 = document.createElement("div");
document.body.appendChild(div1);

// 2.2
const div2 = document.createElement("div");
const pInside = document.createElement("p");
div2.appendChild(pInside);
document.body.appendChild(div2);

// 2.3
const div3 = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  div3.appendChild(p);
}
document.body.appendChild(div3);

// 2.4
const pDynamic = document.createElement("p");
pDynamic.textContent = "Soy dinámico!";
document.body.appendChild(pDynamic);

// 2.5
document.querySelector(".fn-insert-here").textContent = "Wubba Lubba dub dub";

// 2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");

for (let app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7
document.querySelectorAll(".fn-remove-me").forEach(el => el.remove());

// 2.8
const pMiddle = document.createElement("p");
pMiddle.textContent = "Voy en medio!";

const divs = document.querySelectorAll("div");
divs[0].after(pMiddle);

// 2.9
document.querySelectorAll(".fn-insert-here").forEach(div => {
  const p = document.createElement("p");
  p.textContent = "Voy dentro!";
  div.appendChild(p);
});