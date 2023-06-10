'use strict';


let secNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
console.log(secNum);
let score = 20,
  highScore = 0;
let getNum = function () {
 
  {
    const guessNum = Number(document.querySelector('.guess').value);
  //   console.log(guessNum);
  if (!guessNum) {
    //no input
    document.querySelector('.message').textContent = 'Enter a number at least';
    console.log('null');
  } 
  else if (guessNum !== secNum) {
   
    document.querySelector('.message').textContent = (guessNum>secNum)?"Wait!!! Too high":"Oi! Too low!";
    score--;
    document.querySelector('.score').textContent = score;
  } 
  
  else {
    //right guess
    document.querySelector('.message').textContent = 'Correct Guess!';
    document.querySelector('.number').textContent = secNum;
    document.querySelector('.score').textContent = score;
    if (highScore < score) {
      highScore = score;
    }

    document.querySelector('body').style.backgroundColor = 'purple';
    document.querySelector('.number').style.width = '45vw';
  }
  document.querySelector('.highscore').textContent = highScore;
  }
};
document.querySelector('.check').addEventListener('click', getNum);

const againFun = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secNum = Math.trunc(Math.random() * 20) + 1;
  console.log(secNum);
  document.querySelector('.guess').value = '';
};
document.querySelector('.again').addEventListener('click', againFun);
