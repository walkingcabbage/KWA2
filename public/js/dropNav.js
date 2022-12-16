/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  const mydropdown = document.getElementById("myDropdown1");
  const mydropdownO = document.getElementById("myDropdown2");
  const mya = document.querySelectorAll("#myDropdown1>a");
  const arrow1=document.querySelector(".db1 > span > i");
  const arrow2=document.querySelector(".db2 > span > i");



  if (!mydropdown.classList.contains('show')) {
    mydropdown.classList.add("show");
    mydropdown.style.height = mya[0].offsetHeight * mya.length + "px";
    arrow1.classList.remove('down');
    arrow1.classList.add('up');
    if (mydropdownO.classList.contains('show')) {
      setTimeout(() => mydropdownO.classList.remove('show'), 200);
      mydropdownO.style.height = 0;
      arrow2.classList.remove('up');
      arrow2.classList.add('down');
    }

  } else {
    setTimeout(() => mydropdown.classList.remove('show'), 200);
    mydropdown.style.height = 0;
    arrow1.classList.remove('up');
    arrow1.classList.add('down');
  }
}

function myFunction2() {
  const mydropdown = document.getElementById("myDropdown2");
  const mydropdownO = document.getElementById("myDropdown1");
  const mya = document.querySelectorAll("#myDropdown2>a");
  const arrow1=document.querySelector(".db1 > span > i");
  const arrow2=document.querySelector(".db2 > span > i");

  if (!mydropdown.classList.contains('show')) {
    mydropdown.classList.add("show");
    mydropdown.style.height = mya[0].offsetHeight * mya.length + "px";
    arrow2.classList.remove('down');
    arrow2.classList.add('up');
    if (mydropdownO.classList.contains('show')) {
      setTimeout(() => mydropdownO.classList.remove('show'), 200);
      mydropdownO.style.height = 0;
      arrow1.classList.remove('up');
      arrow1.classList.add('down');
    }

  } else {
    setTimeout(() => mydropdown.classList.remove('show'), 200);
    mydropdown.style.height = 0;
    arrow2.classList.remove('up');
    arrow2.classList.add('down');
  }
}