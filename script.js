const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "mOWUeOmpdSbTrqEsn1fz7g==mwPyrRi1LKStYX7Z";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke() {
try {
        jokeEl.innerText = "Ruko zara sabr karo😂";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    
        jokeEl.innerText = data[0].joke;
} catch (error) {
    
    jokeEl.innerText = "An error happened... try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    
}
}
  


btnEl.addEventListener("click", getJoke);