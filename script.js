const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const setHeader = {
    headers: {
        Accept : "application/json"
    }
}

const generateJokes = () => {
    fetch('http://icanhazdadjoke.com', setHeader)
    .then((res) => res.json())
    .then((data) => {
            jokes.innerHTML = data.joke;
        }).catch((error) => {
        console.log(error);
    })
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();