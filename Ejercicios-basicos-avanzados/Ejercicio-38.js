let sum = 0;
let count = 0;

for (let user of users) {
  for (let key in user.favoritesSounds) {
    sum += user.favoritesSounds[key].volume;
    count++;
  }
}
console.log(sum / count);