// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

// import styles bundle

const noticeSwiper=new Swiper('.nSwiper',{
  autoplay: {
    delay: 3000 
  },
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  centeredSlides: true,
  // freeMode: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

const playBtn=document.querySelector('.play');
const pauseBtn=document.querySelector('.pause');

playBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  playBtn.style.display='none';
  pauseBtn.style.display='inline-block';
  noticeSwiper.autoplay.start();
})
pauseBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  playBtn.style.display='inline-block';
  pauseBtn.style.display='none';
  noticeSwiper.autoplay.stop();
})