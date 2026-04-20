function swap(array, i1, i2) {
  let temp = array[i1];
  array[i1] = array[i2];
  array[i2] = temp;
  return array;
}