function findMutantByPower(mutants, power) {
  let found = mutants.filter(m => m.power === power);

  if (found.length > 0) {
    return "Encontrados: " + found.map(m => m.name).join(", ");
  }
  return "No encontrado";
}