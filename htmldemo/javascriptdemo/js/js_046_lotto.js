//js_046_lotto.js

//6개의 난수를 구하고 중복 체크
let lotto = [];
for (let i = 0; i <= 5; i++) {
  //0.0이상 ~ 1.0미만
  //let ran = Math.random();

  //0.0이상 ~ 45.0미만
  let ran = math.random() * 45;

  //1이상 ~45까지
  ran = Math.floor(ran) + 1;
  console.log(ran);
  lotto.push(ran);

  for (let j = 0; j < i; i++) {
    if (lotto[j] == lotto[i]) {
      i--;
      break;
    }
  }
}

//정렬

lotto.sort((a, b) => {
  return a - b;
});

//3 출력
//console.log(lotto);
//NodeList
let divList = document.querySelectorAll('div.wrap div');

divList.forEach((Element, idex) => {
  Element.innerText = lotto[idx];
});

//window
showThisName2();
////////////////이벤트에서this
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
  //<button id ='btn' >commit</button> true
  console.log(this, this == btn);
});

btn.addEventListener('click', () => {
  //window false

  console.log(this, this == btn);
});

////////////////////////////////////////////////
// call, apply , bind을 이용해서 this에 특정객체를 지정할 수 있음
////////////////////////////////////////

const hong = { name: '홍길동' };
const jung = { name: '정해인' };

//////////////////////////////////////////////
//call() :  call메서드는 모든 함수에서 사용할 수 있으며  this값을 특정 값으로 지정 할 수 있다.

console.log('call()=======================================================');
showThisName.call(hong);
