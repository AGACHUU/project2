//js_043_propagation.js

document.querySelector('.red').onclick = (e) => {
  alert('red');
};

document.querySelector('.green').onclick = (e) => {
  alert('green');
  e.stopPropagation;
};

document.querySelector('.blue').onclick = (e) => {
  alert('blue');

  e.stopPropagation(); //부모로 부터 자식에게 전파하는걸 멈춰줌
  //event.stopPropagation()
};

document.querySelector('. blue').onclick = (e) => {
  alert('blue');
  e.stopPropagation();
};

document.querySelector('a').onclick('a').onclick = (e) => {
  alert('안녕하세요');
  //event.preventDefault();
  return false;
};

/* 
[1] Event Propagation (이벤트 전파)
캡처링 (capturing phase) :부모 요소에서 Target요소로 이벤트 전파

버블링 (bubbling phase) : Target 요소에서 부모 요소로 이벤트 전파

[2] 이벤트 차단
stopPropagation()

[3] stopPropagtaion ()와 preventDefault()비교
stopPropagation():이벤트 전파 차단 return false
(jQuery)
preventDefault() : 디폴트 이벤트 차단 return false
(javascript, jQuery)

https://www.w3schools.com/jsref/event_preventdefault.asp
https://www.w3schools.com/jsref/event_stoppropagation.asp

*/
