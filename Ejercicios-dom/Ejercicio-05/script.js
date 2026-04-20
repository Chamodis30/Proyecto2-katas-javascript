const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const containerAlbums = document.createElement("div");
containerAlbums.style.fontFamily = "Arial";
containerAlbums.style.padding = "20px";

const title = document.createElement("h2");
title.textContent = "Lista de Álbumes";

const ulAlbums = document.createElement("ul");

for (let album of albums) {
  const li = document.createElement("li");
  li.textContent = album;
  li.style.margin = "10px 0";
  ulAlbums.appendChild(li);
}

containerAlbums.appendChild(title);
containerAlbums.appendChild(ulAlbums);

document.body.appendChild(containerAlbums);