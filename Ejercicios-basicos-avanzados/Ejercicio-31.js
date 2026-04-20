for (let artist of artists) {
  for (let influence of artist.influences) {
    console.log(artist.name, "->", influence);
  }
}