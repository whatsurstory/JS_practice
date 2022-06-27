"use strict";
//answer number in 0~99
let answer = Math.floor(Math.random() * 100);
let n1 = 0;
let n2 = 99;

while (true) {
  let guess = prompt("請輸入" + n1 + "~" + n2 + "之間的阿拉伯數字");
  if (guess < n1 || guess > n2) {
    alert("再給你一次機會，請填寫" + n1 + "~" + n2 + "的數字");
    continue;
  }
  if (guess == answer) {
    alert("冰崩冰崩~答對了! 答案就是" + answer);
    break;
  } else if (guess > answer) {
    guess = n2;
  } else if (guess < answer) {
    guess = n1;
  }
}
