const input = document.querySelector('[data-function="toFilterStreamers"]');

input.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = streamers.filter(s =>
    s.name.toLowerCase().includes(value)
  );

  console.log(filtered);
});