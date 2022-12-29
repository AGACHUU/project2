//js_040_today.js

let dateBtnNode = document.querySelector('button');

dateBtnNode.onclick = () => {
  let pNode = document.querySelector('p');

  //날짜는 무족건 new로 해서 객체 생성을 한다.
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  pNode.innerText = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
};
//let arr =[1,2,3];
let obj = { a: 1, b: 2 };
