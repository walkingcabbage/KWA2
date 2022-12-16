// window.onscroll = scrollF();


// window.addEventListener('scroll', scrollF)

// function scrollF() {
//   const logoElm=document.getElementById('logo');

//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     logoElm.style.top = '-61px';
//   } else {
//     if(!logoElm.classList.contains('subActive2')){
//       logoElm.style.top = '32px';
//     }else{
//       logoElm.style.top='57px';
//     }
//   }
  
// }
let lastScrollY=0;
addEventListener("scroll", e => {
  const scrollY = window.scrollY;
  const logoElm=document.getElementById('logo');
  const navWrap=document.querySelector('.navwrap');
  // 이전의 스크롤 위치와 비교하기 true는 다운 false는 업
  const direction = scrollY > lastScrollY ? true : false;
  
  // 현재의 스크롤 값을 저장
  lastScrollY = scrollY;
  if(direction==true){
    logoElm.style.top = '-61px';
    navWrap.style.height='50px';
  } else {
    if(!logoElm.classList.contains('subActive2')){
      logoElm.style.top = '32px';
      navWrap.style.height='120px';
    }else{
      logoElm.style.top='57px';
    }
  }
  headerColorChanger();
});



function headerColorChanger(){
  const hamImg=document.querySelector('.ham .icon');
  const menuwrap=document.querySelector('.menuwrap');
  const searchImg=document.querySelector('.searchwrap .icon');
  const logoImg=document.querySelector('.logo .logoimg');
  const longLine=document.querySelector('.long-line');
  const shortLine=document.querySelector('.short-line');
  const navWrap=document.querySelector('.navwrap');
  const logoWrap=document.querySelector('.logowrap');
  const sec1=document.querySelector('.sec1');
  const sec2=document.querySelector('.sec2');
  const startChange=sec1.offsetHeight+sec2.offsetHeight;
  if(window.pageYOffset>startChange-50){
    menuwrap.classList.add('invert');
  searchImg.classList.add('invert');
  logoImg.classList.add('invert');
  longLine.classList.add('invert');
  shortLine.classList.add('invert');
  navWrap.classList.add('backWhite');
  // logoWrap.classList.add('backWhite');
  }else if(window.pageYOffset<startChange){
    menuwrap.classList.remove('invert');
    searchImg.classList.remove('invert');
    logoImg.classList.remove('invert');
    longLine.classList.remove('invert');
    shortLine.classList.remove('invert');
    navWrap.classList.remove('backWhite');
    // logoWrap.classList.remove('backWhite');
  }



}