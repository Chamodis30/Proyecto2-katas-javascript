function findArrayIndex(array, text) {
  return array.indexOf(text);
}

function removeItem(array, text) {
  let index = findArrayIndex(array, text);

  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}