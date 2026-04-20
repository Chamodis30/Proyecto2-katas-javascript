function findLongestWord(list) {
  let longest = list[0];

  for (let word of list) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}