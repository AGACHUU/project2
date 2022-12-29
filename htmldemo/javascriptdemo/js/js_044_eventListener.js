//js_044_eventListener.js

let btn = document.querySelector('button'); // 제일 마지막꺼만 등ㅇ록이 됨

// btn.onclick = () => {
//   alert('click');
// };

// btn.onclick = () => {
//   alert('click2');
// };

function click1() {
  alert('click1');
}

function click2() {
  alert('click2');
}

//btn.addEventListener('이벤트', 함수,이벤트  순차적으로 전파);
//이벤트 전파 => true : capturing , false: bubbling
//캡쳐를 지정한 자리가 없으면 기본적으로 버블링
btn.addEventListener('click', click1, false);
btn.addEventListener('click', click2, false);
