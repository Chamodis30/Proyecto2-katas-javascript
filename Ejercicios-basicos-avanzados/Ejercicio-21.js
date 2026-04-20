for (let user of users) {
  if (user.years < 18) {
    console.log("Usuarios menores de edad:", user.name);
  } else {
    console.log("Usuarios mayores de edad:", user.name);
  }
}