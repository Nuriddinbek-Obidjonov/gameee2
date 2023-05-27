const search = document.getElementById('search');
const games = document.querySelectorAll('.game');

// Taking JSON file
const request = new XMLHttpRequest();
let listOfGames = [];
let list = [];

request.addEventListener('readystatechange', () => {
    if (request.readyState == 4 && request.status == 200) {
        listOfGames = JSON.parse(request.responseText);
        listOfGames.forEach((i) => {
            list.push(i.name);
        });
    }
});

request.open('GET', 'gameee-list.json');
request.send();

// Matching input searching value with JSON
search.addEventListener('input', () => {
    console.log(search.value)
    list.forEach((title, i) => {
        if (title.includes(search.value.toLowerCase())) {
            games[i].style.display = "flex";
        } else {
            games[i].style.display = "none";
        }
    })
})