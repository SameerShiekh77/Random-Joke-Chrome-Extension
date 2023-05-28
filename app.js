let url = "https://icanhazdadjoke.com/slack";
fetch(url)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    const joke = data.attachments[0].text;
    const jokeElement = document.getElementById("jokeElement");
    console.log(jokeElement);
    jokeElement.innerHTML = joke;
})