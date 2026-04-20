for (let toy of toys) {
  if (toy.sellCount > 15) {
    popularToys.push(toy);
  }
}
console.log(popularToys);