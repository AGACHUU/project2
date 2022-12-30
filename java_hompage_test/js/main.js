//main.js

////////////////////////////////////////
//슬라이드 기능 구현
//////////////////////////////////////

setInterval(function () {
  let tg = document.querySelector('.slide');
  tg.style.top = '-100%';
  tg.style.transiton = '0.6s';

  setTimeout(function () {
    let first = tg.querySelectorAll('li')[0];
    tg.appendChild(first);
    tg.style.top = '0';
    tg.style.transiton = 'none';
  }, 600); //0.6초 동안 실행해라 //전체는 삼초 동안 진행됨
}, 3000);

//////////////////////////////////////////////////
//탭변경 변경하기
////////////////////////////////////
function chgTab(i1, i2) {
  //탭메뉴
  let tm = document.querySelectorAll('.tm > li');
  //탭 내용//
  let tc = document.querySelectorAll('.tc > li');

  //클래스추가
  tm[i1].classList.add('on');
  tc[i1].classList.add('on');

  //클래스 제거
  tm[i2].classList.remove('on');
  tc[i2].classList.remove('on');
}

let slideIndex = 0;
showSlides();
//슬라이드 js//
function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
