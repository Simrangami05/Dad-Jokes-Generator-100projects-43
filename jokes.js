const DadJoke = document.getElementById("jokes");
const JokeBtn = document.getElementById("button");

const ApiKey = "36231e4560msh94a0578b6bde73cp1f4251jsn4ee9bb0c22dc";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": ApiKey,
  },
};

const ApiUrl = `https://dad-jokes7.p.rapidapi.com/dad-jokes/joke-of-the-day?joke={joke}`;

async function tellJoke() {
  try {
    DadJoke.innerText = "Updating...";
    JokeBtn.disabled = true;
    JokeBtn.innerText = "Loading...";

    const response = await fetch(ApiUrl, options);
    const result = await response.text();
    console.log(result);

    JokeBtn.disabled = false;
    JokeBtn.innerText = "Tell me a joke";

    DadJoke.innerText = result[0].joke;
  } catch (error) {
    DadJoke.innerText = "An error occured, Please try agan later";

    JokeBtn.disabled = false;
    JokeBtn.innerText = "Tell me a joke";

    console.log(error);
  }
}
JokeBtn.addEventListener("click", tellJoke);
