function findOldestXMen(list) {
  let oldest = list[0];

  for (let x of list) {
    if (x.year < oldest.year) {
      oldest = x;
    }
  }
  return oldest;
}