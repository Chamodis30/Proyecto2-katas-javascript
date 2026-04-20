let categorias = [];

for (let movie of movies) {
  for (let cat of movie.categories) {
    if (!categorias.includes(cat)) {
      categorias.push(cat);
    }
  }
}
console.log(categorias);