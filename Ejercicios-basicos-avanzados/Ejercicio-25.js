let before = 0;
let after = 0;

for (let movie of movies) {
  if (movie.releaseYear < 2000) before++;
  else after++;
}

console.log(before, after);