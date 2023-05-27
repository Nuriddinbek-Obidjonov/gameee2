const q1 = document.querySelector('.q');
const w1 = document.querySelector('.w');
const e1 = document.querySelector('.e');
const r1 = document.querySelector('.r');
const t1 = document.querySelector('.t');
const y1 = document.querySelector('.y');
const u1 = document.querySelector('.u');
const i1 = document.querySelector('.i');
const o1 = document.querySelector('.o');
const p1 = document.querySelector('.p');
const allbtn = document.querySelectorAll('.drum');

document.addEventListener('keydown', function (i) {

        let btn = i.keyCode;

        switch (btn) {

            case 81:
                q1.classList.add('pressed');
                let q = new Audio('sound0.mp3');
                q.play();
                setTimeout(() => {
                    q1.classList.remove('pressed');
                }, 300);
            break;

            case 87:
                w1.classList.add('pressed');
                let w = new Audio('sound1.mp3');
                w.play();
                setTimeout(() => {
                    w1.classList.remove('pressed');
                }, 300);
            break;

            case 69:
                e1.classList.add('pressed');
                let e = new Audio('sound2.mp3');
                e.play();
                setTimeout(() => {
                    e1.classList.remove('pressed');
                }, 300);
            break;

            case 82:
                r1.classList.add('pressed');
                let r = new Audio('sound3.mp3');
                r.play();
                setTimeout(() => {
                    r1.classList.remove('pressed');
                }, 300);
            break;

            case 84:
                t1.classList.add('pressed');
                let t = new Audio('sound4.mp3');
                t.play();
                setTimeout(() => {
                    t1.classList.remove('pressed');
                }, 300);
            break;

            case 89:
                y1.classList.add('pressed');
                let y = new Audio('sound5.mp3');
                y.play();
                setTimeout(() => {
                    y1.classList.remove('pressed');
                }, 300);
            break;

            case 85:
                u1.classList.add('pressed');
                let u = new Audio('sound6.mp3');
                u.play();
                setTimeout(() => {
                    u1.classList.remove('pressed');
                }, 300);
            break;

            case 73:
                i1.classList.add('pressed');
                let i2 = new Audio('sound7.mp3');
                i2.play();
                setTimeout(() => {
                    i1.classList.remove('pressed');
                }, 300);
            break;

            case 79:
                o1.classList.add('pressed');
                let o = new Audio('sound8.mp3');
                o.play();
                setTimeout(() => {
                    o1.classList.remove('pressed');
                }, 300);
            break;

            case 80:
                p1.classList.add('pressed');
                let p = new Audio('sound9.mp3');
                p.play();
                setTimeout(() => {
                    p1.classList.remove('pressed');
                }, 300);
            break;

            default: console.log('wrong!')
        }

});

for (let i = 0; i < 10; i++) {
    allbtn[i].addEventListener('click', () => {
        allbtn[i].classList.add('pressed');
        let sound = new Audio(`sound${i}.mp3`);
        sound.play();
        setTimeout(() => {
            allbtn[i].classList.remove('pressed');
        }, 300);
    })
}