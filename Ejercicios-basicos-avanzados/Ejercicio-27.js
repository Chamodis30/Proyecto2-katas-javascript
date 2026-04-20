let oldest = cartoons[0];

for (let cartoon of cartoons) {
  if (cartoon.debut < oldest.debut) {
    oldest = cartoon;
  }
}

console.log(oldest.name);