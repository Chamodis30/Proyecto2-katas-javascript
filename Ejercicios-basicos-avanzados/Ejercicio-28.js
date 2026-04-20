let total = 0;

for (let album of albums) {
  if (album.genre === "Rock") {
    total += album.duration;
  }
}
console.log(total);