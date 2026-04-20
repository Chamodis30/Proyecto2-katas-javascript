let filtered = [];

for (let toy of toys) {
  if (!toy.name.includes("gato")) {
    filtered.push(toy);
  }
}
console.log(filtered);