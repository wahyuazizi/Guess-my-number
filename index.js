'use strict'






const $ = function (selector, value) {
    document.querySelector(selector).textContent = value;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1; // random number 1-20
let life = document.querySelector('.life-value').textContent = 20;
let highscore = 0;


//Increament & decrement



document.querySelector('.check-btn').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess-input').value);




    if (!guess) { //if the value = 0
        $('.message', 'No number');

    } else if (guess !== secretNumber) { //if the user wrong

        if (life > 1) { // score must be greater than 0
            $('.message', guess < secretNumber ? '📉 Too Low!' : '📈 Too High!');
            life--;

            $('.life-value', life);
        } else {
            $('.message', 'Game Over!');

            life = 0;
            $('.life-value', life);
        }
    } else {
        $('.message', '🤩🤩 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#fff';

        $('.secret-number', secretNumber);

        if (life > highscore) {
            highscore = life;
            $('.highscore-value', highscore);
        }
    }
})


document.querySelector('.again').addEventListener('click', function () {
    life = 20;
    $('.life-value', '20');

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('body').style.backgroundColor = '#e7e7ef';
    $('.message', 'Start guessing...');

    document.querySelector('.guess-input').value = '';
})

// document.querySelector('.ctrl-btn-decrement').addEventListener('click', function () {

//     const ctrl = function () {
//         let guess = Number(document.querySelector('.guess-input').value);

//         if (guess) {
//             $('.guess-input', guess);
//         }
//     }


// })