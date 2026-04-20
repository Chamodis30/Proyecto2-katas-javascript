// 1.1
const btn = document.createElement("button");
btn.id = "btnToClick";
btn.textContent = "Click me";
document.body.appendChild(btn);

btn.addEventListener("click", (event) => {
  console.log(event);
});

// 1.2
document.querySelector(".focus").addEventListener("focus", (e) => {
  console.log(e.target.value);
});

// 1.3
document.querySelector(".value").addEventListener("input", (e) => {
  console.log(e.target.value);
});