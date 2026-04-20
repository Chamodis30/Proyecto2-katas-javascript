for (let song of songs) {
  if (song.genre === "Rock" && song.duration > 5) {
    rockPlaylist.push(song);
  }
}
console.log(rockPlaylist);