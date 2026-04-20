function nameFinder(list, name) {
  let index = list.indexOf(name);

  if (index !== -1) {
    return { found: true, position: index };
  }
  return { found: false };
}