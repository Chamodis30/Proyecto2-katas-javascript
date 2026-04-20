let small = [];
let medium = [];
let large = [];

for (let movie of movies) {
  if (movie.durationInMinutes < 100) small.push(movie);
  else if (movie.durationInMinutes < 200) medium.push(movie);
  else large.push(movie);
}

console.log(small, medium, large);