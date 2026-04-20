const rpgGames = videogames.filter(game =>
  game.genders.includes('RPG')
);

const avgScore = rpgGames.reduce((acc, game) => acc + game.score, 0) / rpgGames.length;

console.log(avgScore);