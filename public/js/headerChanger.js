


function ChangeSub() {
  const header = document.querySelector('header');
  const logowrap = document.querySelector('.logowrap');
  header.classList.add('subActive');
  logowrap.classList.add('subActive2');
  document.querySelector('.subActive').parentElement.style.height='88px'
}

function ChangeMain() {
  const header = document.querySelector('header');
  const logowrap = document.querySelector('.logowrap');
  header.classList.remove('subActive');
  logowrap.classList.remove('subActive2');
}

