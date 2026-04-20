function averageMovieDuration(movies) {
  let sum = 0;

  for (let movie of movies) {
    sum += movie.duration;
  }

  return sum / movies.length;
}