// 3.1
const names = users.map(user => user.name);

// 3.2
const updatedNames = users.map(user =>
  user.name.startsWith('A') ? 'Anacleto' : user.name
);

// 3.3
const citiesVisited = cities.map(city =>
  city.isVisited ? city.name + ' (Visitado)' : city.name
);