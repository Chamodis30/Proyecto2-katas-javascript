// 4.1
const adults = ages.filter(age => age > 18);

// 4.2
const even = ages.filter(age => age % 2 === 0);

// 4.3
const lolPlayers = streamers.filter(s => s.gameMorePlayed === 'League of Legends');

// 4.4
const withU = streamers.filter(s => s.name.includes('u'));

// 4.5
const legends = streamers
  .filter(s => s.gameMorePlayed.includes('Legends'))
  .map(s => {
    if (s.age > 35) {
      return {...s, gameMorePlayed: s.gameMorePlayed.toUpperCase()};
    }
    return s;
  });