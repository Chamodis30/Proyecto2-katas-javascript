function repeatCounter(list) {
  let counter = {};

  for (let word of list) {
    counter[word] = (counter[word] || 0) + 1;
  }

  return counter;
}