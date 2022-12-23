//js_026_String.js

let data = 'It`s alright';
console.log(data);

//length: 문자열의 길이
console.log(data.length);

/*
특정 범위의 데이터를 리턴해주는 3가지 메소드
- substring(start, end);
- suvstr(start, length);
- slice(start, end);
*/

data = 'Apple, Banana, Kiwi';
//Bananna
console.log(`substring: ${data.substring(7, 13)}`); //7인덱스 부터 13인덱스미만
//substring()은 음수값을 지원하지 않는다.
console.log(`substring:${data.substring(-12, -6)}`);

//Banana
console.log(`substr:${data.substr(7, 6)}`);
//Banana
console.log(`substr:${data.substr(-12, 6)}`);

//Banana
console.log(`slice:${data.substr(7, 13)}`);
//Banana
console.log(`slice:${data.substr(-12, -6)}`);

console.log(`data:${data}`);

//replace ('찾을 문자열 |RegExp','바꿀 문자열');
//i :대소문자 구분 없음, g: 모든 문자열

console.log(`replace : ${data.replace('Banana', 'Grape')}`);

//apple ,banana,kiwi
console.log('data:${data}');

data = 'Mr Blue has a blue house and a blue car';
//Mr Blue has a red house and a blue car
console.log(data.replace(/blue/g, 'red'));

data = 'Mr Blue has a blue house and a blue car';
//Mr Blue has a red house and a blue car
console.log(data.replace(/blue/i, 'red'));

data = 'Mr Blue has a blue house and a blue car';
//Mr Blue has a red house and a blue car
console.log(data.replace(/blue/gi, 'red'));

data = 'Hello World';
//Hello World
console.log(`toUpperCase() : ${data.toUpperCase()}`);
//helloworld
console.log(`toLowerCase(): ${data.toLowerCase()}`);

let data2 = 'javascript';
console.log(`concat():${data.concat(data2)}`); // Hello Worldjavascript
console.log(`concat():${data.concat(' ', data2)}`); // Hello World javascript
console.log(`concat():${data.concat('__', data2)}`); //Hello
// World__javascript;

//H
console.log(`charAt(): ${data.charAt(0)}`);

//72 (unicode value)
console.log(`charAt(): ${data.charCodeAt(0)}`);

//match():검색 대이터와 일치하는 문자열 있으면 모두를 찾아서 배열로 리턴하고
// 일치하는 문자열이 없으면 null을 리턴한다.

data = 'Mr Blue has a blue house and a blue car';
let res = data.match(/blue/g);
//blue,blue object true
console.log('match(): ${res} ${typeof res} ${res instanceof Array}');

res = data.match(/red/g);
//blue,blue object true
console.log('match(): ${res} ${typeof res} ${res instanceof Array}');

//search():검색데이터와 일치하느 ㄴ문자열이 있으면 처음의 인덱스를 리턴하고 일치하는 문자열이 없으면 -1을 리턴한다.

res = data.search(/blue/g);
//14
console.log(`search(): ${res}`);

res = data.search(/red/g);
//14
console.log(`search(): ${res}`);

data = 'Mr Blue has a blue house and a blue car';
//index of ()문자열의 인덱스를 리턴

//0
console.log(data.indexOf('M'));

//3
console.log(data.indexOf('B'));

let position = data.indexOf('blue');
console.log(position); //14

console.log(data.indexOf('blue', position + 1));
//blue의 인덱스를 두번째 부터 찾고 싶다. 첫번째 블루 찾고 그다음 +1번째 를 찾는 것//31

data = 'Mr Blue has a blue house and a blue car';
let pos = -1;
do {
  pos = pos + 1;
  pos = data.indexOf('blue', pos);
  if (pos != -1) console.log(pos);
  else break;
} while (true);

//repeat()
let text = 'korea';
console.log(typeof text);
console.log(text.repeat(10)); //korea를 열번 반복해라

text = '*';
console.log(text.repeat(10));

let text2 = '  korea   data ';
//15
console.log(text2.length);

//12
console.log(text2.trim().length);
//공백지우고 길이 알려줌
