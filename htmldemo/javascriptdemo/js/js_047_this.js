console.log(this);

let member = {
  name: '홍길동',
  show: function () {
    console.log(this);
  },
};

member.show();

/////////////////////////////////////////////
let memeber2 = {
  name: '홍길동',
  show: () => {
    console.log(this);
  },
};

memeber2.show();

function showThisName() {}

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
//{name:'홍길동'}

showThisName.call(hong);
//{name: '정해인'}

showThisName.call(jung);

//Arrow Function 일때: window
showThisName2.call(hong);

//Arrow Function 일때 : window
showThisName2.call(jung);

function member(birthday, job) {
  this.birthday = birthday;
  this.job = job;
  console.log(this);
}
//window
person(2019, 'IT');

//this로 사용할 hong 객체와 person함수의 매개변수에서 받을 인수를 넘긴다.
//{name: '홍길동', birthday:2000, job :'프로그래머'}
person.call(hong, 2000, '프로그래머');

//this로 사용할 jung객체와 person 함수의 매개 변수에서 받을 인수를 넘긴다.
//{name:'정해인', birthday :2016, job:'디자이너 '}
person.call(jung, 2016, '디자이너');

/////////////////////////////////////
//apply
//1.apply 는 함수 매개변수를 처리하는 방법을 제외 하면 call과 같다.
//2. call은 일반적인 함수와 마찬가지로 매개변수로 직접 받지만 apply같은 매개변수를 배열로 받는다.

console.log('apply()===============================================');
//{name:'홍길동', birthday: 2000, job:'프로그래머'}
person.apply(hong, [2000, '프로그래머']);
//name :'정해인',  birthday: 2016, job:'디자이너'}
person.apply(jung, [2016, '디자이너']);
///////////////////////////////////////
//bind
//1. call과 사용방법은 같으나 실행을 해야한다.
//{name:'홍길동', birthday:2000, job: '프로그래머'}
let hongPerson = person.blind(hong, 2000, '프로그래머');
hongPerson;

//{name:'정해인', birthday:2016, job: '디자이너'}
let jungPerson = person.blind(jung, 2016, '디자이너');
jungPerson;
