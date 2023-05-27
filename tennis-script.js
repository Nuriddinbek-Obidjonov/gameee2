const first = document.getElementById('first');
const second = document.getElementById('second');
const play1 = document.getElementById('play1');
const play2 = document.getElementById('play2');
const reset = document.getElementById('reset');
let score_1 = 0;
let score_2 = 0;
let finish = 10;

function ol() {
    let select = document.getElementById('max-score');
    finish = select.value;
}

play1.addEventListener('click', () => {
    score_1 += Math.floor(Math.random() * 10);
    first.textContent = score_1;
    play1.setAttribute('disabled', '');
    play2.removeAttribute('disabled', '');
    if (score_1 >= finish) {
        first.classList.add('class', 'green');
        second.setAttribute('class', 'red');
        play2.setAttribute('disabled', '');
    }
})

play2.addEventListener('click', () => {
    score_2 += Math.floor(Math.random() * 10);;
    second.textContent = score_2;
    play2.setAttribute('disabled', '');
    play1.removeAttribute('disabled', '');
    if (score_2 >= finish) {
        first.setAttribute('class', 'red');
        second.classList.add('class', 'green');
        play1.setAttribute('disabled', '');
        }
})

document.addEventListener('keydown', (i) => {
    if (i.keyCode == 37) {
        if (score_1 < finish) {
            score_1 += Math.floor(Math.random() * 10);
            first.textContent = score_1;
            play1.setAttribute('disabled', '');
            play2.removeAttribute('disabled', '');
            
            if (score_1 >= finish) {
                first.classList.add('class', 'green');
                second.setAttribute('class', 'red');
                play2.setAttribute('disabled', '');
                score_2 = 50;
                }
            }
        } else if (i.keyCode == 39) {
            if (score_2 < finish) {
                score_2 += Math.floor(Math.random() * 10);;
                second.textContent = score_2;
                play2.setAttribute('disabled', '');
                play1.removeAttribute('disabled', '');

                if (score_2 >= finish) {
                    first.setAttribute('class', 'red');
                    second.classList.add('class', 'green');
                    play1.setAttribute('disabled', '');
                    score_1 = 50;
                    }
                }
            }
})

reset.addEventListener('click', () => {
    score_1 = 0;
    score_2 = 0;
    first.textContent = 0;
    second.textContent = 0;
    play1.removeAttribute('disabled', '');
    play2.setAttribute('disabled', '');
    first.classList.remove('green');
    first.classList.remove('red');
    second.classList.remove('green');
    second.classList.remove('red');
})