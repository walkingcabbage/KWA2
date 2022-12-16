let didScroll = false;


const scrollInProgress = () => {
  didScroll = true
}
// window.scrollY / 5
// console.log(paralaxTitles[0].offsetHeight);
// console.log(topContentBox.offsetHeight);


// paralaxTitles[0].offsetHeight
// topContentBox.offsetHeight
const raf = () => {
  if (didScroll) {
    let paralaxTitles = document.querySelectorAll('.sec1');
    let topContentBox = document.querySelector('.topContentBox');
    let h1 = paralaxTitles[0].offsetHeight;
    let h2 = topContentBox.offsetHeight;
    paralaxTitles.forEach((element, index) => {
      element.style.transform = "translateY(" + (window.scrollY / ((h1 + h2) / h2)) + "px)"
    })
    didScroll = false;
  }
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)