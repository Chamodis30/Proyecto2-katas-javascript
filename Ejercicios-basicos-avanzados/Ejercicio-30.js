let grouped = {};

for (let track of tracks) {
  if (!grouped[track.genre]) grouped[track.genre] = [];
  grouped[track.genre].push(track);
}

console.log(grouped);