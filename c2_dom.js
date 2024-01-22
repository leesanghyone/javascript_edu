// dom 조작하는 방법을 배운다.

//1.아이디로 조작하기.
let title = document.getElementById('title');
console.log(title);
title.textContent = '자바스크립트 수정';

// 2.클래스로 조작하기.
let items = document.getElementsByClassName('item');
console.log(items);

// 3.쿼리로 조작하기.
let h1 = document.querySelector('#title');
console.log('h1 items : ', h1);
