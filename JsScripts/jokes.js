console.log(Object.values(JokeAPI));


JokeAPI.getJokes({
  jokeType: "single"
})
  .then((r) => r.json())
  .then((data) => {
    updateUI(data);
  });

function updateUI(jokeData) {
  const $ = (id) => document.getElementById(id);

  $("joke--text").innerHTML = jokeData.joke;
}
