//js_035_dom.js

let myNode = document.getElementById('p2');
//리턴이 HTMLElement
console.log(myNode);
console.log(`myNode:${myNode}`);
//myNode:[object HTMLParagraphElement]
//그냥 리턴하는거랑 백틱으로 출력하는거랑 다름

myNode.style.color = 'red';

///////////////////////////////////////////
//부모, 이웃에 넣을 수도 있음.

let ptNode = myNode.parentNode;
console.log(ptNode);
//<div id = "wrap"><div>
console.log(`ptNode:${ptNode}`); //ptNode:[object HTMLDivElement]
ptNode.style.color = 'blue';
//ptNode의 자식모두에게 적용됨.

/////////////////////////////////////
//content2의 이웃들 적용하기
//1)앞이웃
let prevNode = myNode.previousSibling;
console.log(`prevNode:${prevNode}`);
console.log(prevNode); //#text
//prevNode:[object Text] 왜 텍스트 노드?? 줄바꿈때문에그럼

prevNode = myNode.previousSibling.previousSibling; //prevNode.previousSibling;
console.log(`prevNode:${prevNode}`); //prevNode:[object HTMLParagraphElement] 됨.
console.log(prevNode);
//<p id ='p1'>content1</p>
///////////////////////////////////////////////
//previousElementSibling: element node만 검색한다.
let prevElementNode = myNode.previousElementSibling;
console.log(prevElementNode);
console.log(`prevElementNode:${prevElementNode}`);
//이건 바로나옴. <p id ='p1'>content1</p>

/////////////////////////////////////
nextSibling;
let nexNode = myNode.nextSibling;
//[object Text]
console.log;
`${nextNode}`;

nextNode = nextNode.nextSibling;
//<p id="p3"> content3</p>
console.log(nextNode);
//[object HTMLParagraphElemnet]
console.log(`${nextElementSibling}`);

//////////////////////////////////////
// childNodes

let divNode = document.getElementById('wrap';
//[object HTMLDivElement]
console.log (`${divNode}`);

let divChilesNode = divNode.childNodes;
//[object Nodelist]
console.log(`${divChilesNode}`);
//Nodelist(9)[text, p#p1,text,p3p2,text,p3p3,text,p3p4,text]

////////////////////////
//childeren
let divChildren = divNode.children;
console.log(`${divChildren}`);
console.log(divChildren);


let p4Node = document.querySelector('#p4');
//<p id ="p4">
console.log(p4Node);

console.log('${p4Node}');

let aNode =p4Node.firstElementChildChild;
//<img src="images/gosu.jpg" alt = 영화배우" />
console.log(`${aNode}`);


/////////////////////////////////////////
///객체.getAttrivute('속성명'), 객체 setAttribute('속성명','값')
//객체. 속성명, 객체, 속성명 ='값'

let aAttrNode =aNode.getAttribute('src');
//images/gosu.jpg
console.log(aAttrNode);

aAttrNode = aNode.scroll;
console.log(aAttrNode);

aAttrNode =aNode.src;
//http://127.0.0.1:5500/htmldemo/javascriptdemo/js_035_dom.html
console.log(aAttrNode)

aNode.setaAttribute('title','스타배우');
console.log(aNode.getAttribute('title'));
console.log(aNode.title);
aNode.id = 'imGosu';
console.log(aNode.id);
console.log(aNode.getAttribute('id'));


let aAttrList = aNode.getAttributeNote;
console.log(aAttrList.length);
console.log(aAttrList);


