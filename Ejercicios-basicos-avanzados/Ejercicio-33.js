function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  }
  return "País no encontrado";
}