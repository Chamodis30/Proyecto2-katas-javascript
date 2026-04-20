let grouped = {};

for (let movie of starWarsMovies) {
  let decade = Math.floor(movie.releaseYear / 10) * 10;

  if (!grouped[decade]) grouped[decade] = [];

  grouped[decade].push(movie);
}

console.log(grouped);