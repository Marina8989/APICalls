const joke = document.querySelector('.joke');
const jokeBtn = document.querySelector('.btn');

 getJoke();

jokeBtn.addEventListener('click', getJoke)

async function getJoke() {
   let config = {
       headers: {
           'Accept': 'application/json'
       }
   }

    let res = await fetch('https://icanhazdadjoke.com/', config);
    let data = await res.json();
    
    joke.innerText = data.joke;
}