function calculateActorsAges(actors) {
  let currentYear = new Date().getFullYear();

  return actors.map(actor => ({
    name: actor.name,
    age: currentYear - actor.born
  }));
}