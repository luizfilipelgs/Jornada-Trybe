const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

const getRandomAdvice = async () => {
  const url = 'https://api.adviceslip.com/advice'
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.slip.advice);
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();
getRandomAdvice();
