// Players
const player1 = document.getElementById('name--0');
const player2 = document.getElementById('name--1');
setTimeout(() => {
    const a = window.prompt("What is the name of 1st player?");
    const b = window.prompt("What is the name of 2nd player?");
    player1.textContent = a ? a : player1.textContent;
    player2.textContent = b ? b : player2.textContent;
}, 500);

// Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const range = document.getElementById('max-score');
const parag = document.getElementById('text');
let maxs = 50;

// Dice image
const diceImg = document.querySelector('.dice');
diceImg.style.display = 'none';

function maxScore() {
    maxs = range.value * 10;
    parag.textContent =  `Max: ${maxs}`;
}

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let gameOver = true;

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

btnRoll.addEventListener('click', () => {
    if (gameOver) {
        diceImg.style.display = 'block';
        const random = Math.trunc(Math.random() * 6) + 1;
        diceImg.src = `dice-${random}.png`;

        if (random !== 1) {
            currentScore += random;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

// Hold button
btnHold.addEventListener('click', () => {
    if (gameOver) {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        if (score[activePlayer] >= maxs) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        gameOver = false;
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', () => {
    currentScore = 0;
    activePlayer = 0;
    score = [0, 0];
    gameOver = true;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
});