function averageWord(list) {
  let sum = 0;

  for (let item of list) {
    if (typeof item === "number") {
      sum += item;
    } else {
      sum += item.length;
    }
  }

  return sum / list.length;
}