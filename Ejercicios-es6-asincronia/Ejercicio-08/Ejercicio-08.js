const select = document.querySelector("#character-list");
const img = document.querySelector(".character-image");

fetch("https://thronesapi.com/api/v2/Characters")
  .then(res => res.json())
  .then(data => {

    data.forEach(character => {
      const option = document.createElement("option");
      option.value = character.imageUrl;
      option.textContent = character.fullName;
      select.appendChild(option);
    });

    select.addEventListener("change", (e) => {
      img.src = e.target.value;
    });
  });