let background = document.getElementById("background");
let character = document.getElementById("character");
let block = document.getElementById("block");
let alertPage = document.getElementById("alert-page");
let maxScore = document.getElementById('max-score');

if (localStorage.getItem('maxscore')) {
    maxScore.textContent = localStorage.getItem('maxscore') ? localStorage.getItem('maxscore') : '0';

    console.log(maxScore.textContent);
} else {
    localStorage.setItem('maxscore', '0');
}

let counter = 0;
let bgs = 68;
let bls = 6;

document.addEventListener('keydown', function jump(e) {
    if (e.key == ' ') {
        character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
    }
})

function jump() {
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

let checkDead = setInterval(function () {
    let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 165 && blockLeft > 100 && characterBottom <= 145) {
        character.style.animation = "none";
        character.style.display = "none";
        block.style.animation = "none";
        block.style.display = "none";
        alertPage.style.visibility = "visible";
        document.getElementById("score").innerHTML = "Your score: " + Math.floor(counter/50);
        if (counter > localStorage.getItem('maxscore')) {
            localStorage.setItem('maxscore', Math.floor(counter/50));
        }
        counter=0;
        document.getElementById("score-span").innerHTML = counter;
        clearInterval(checkDead);
        document.addEventListener('keyup', function yangilash(i) {
            if (i.key == 'Enter') {
                this.location.reload();
            }
        })
    } else {
        counter++;
        document.getElementById("score-span").innerHTML = Math.floor(counter/50);
    }
}, 10);

let speed = setInterval(function () {
    if (counter != 0) {
        background.style.animation = `move ${bgs/1.0005}s infinite linear`;
        bgs = bgs/1.001;
        block.style.animation = `block ${bls/1.0005}s infinite linear`;
        bls = bls/1.001;
} else {
        clearInterval(speed);
}
}, 40);

function reloadPage() {
    location.reload();
}