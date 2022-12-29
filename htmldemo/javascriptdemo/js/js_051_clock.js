//js_051_clock.js

function setText(selector, text) {
  let targetElement = document.querySelector(selector);
  targetElement.innerText = text;
}
let watchTime = () => {
  const present = new Date();
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];

  const hour = present.getHours();
  const minute = present.getMinutes();
  const seconds = present.getSeconds();
  console.log(`${hour}: ${minute} : ${seconds}`);

  setText('#hours', hour);
  setText('#minute', minute);
  setText('#seconds', seconds);

  const year = present.getFullYear();
  const month = present.getMonth() + 1;
  const date = present.getDate();
  console.log(`${year}-${month}-${date}`);

  setText('#year', year);
  setText('#month', month);
  setText('#date', date);
  setText('#day', dayList[present.getDay()]);
};

watchTime();

let clockInterval = setInterval(watchTime, 1000); // 초단위 숫자가 갱신되는거

/*
setTimeout (실행함수, 시간) : 일정한 시간이 지난 후 하번만 수행
setinterval (실행함수 시간 ): 일정한 시간 간격을 두고 반복 수행
*/
