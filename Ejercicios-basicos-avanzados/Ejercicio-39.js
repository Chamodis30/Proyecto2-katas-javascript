let counter = {};

for (let user of users) {
  for (let key in user.favoritesSounds) {
    counter[key] = (counter[key] || 0) + 1;
  }
}
console.log(counter);