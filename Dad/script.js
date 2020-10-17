const FetchJoke = () => {
  const JOKE_URL = "https://icanhazdadjoke.com/";
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  fetch(proxyurl + JOKE_URL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (!data.id) {
        return null;
      }

      var src = document.getElementById("content");
      src.innerHTML = data.joke;
    });
};

FetchJoke();
document.getElementById("getJoke").addEventListener("click", FetchJoke);
