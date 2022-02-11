var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 5250);
}

var myIndex2 = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex2++;
  if (myIndex2 > x.length) {myIndex2 = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel2, 5250);
}


let toTopDiv = document.querySelector('.toTop');
window.addEventListener('scroll', function(){
  let pxWin = window.pageYOffset;
  if (pxWin > 20) {
    toTopDiv.style.display = 'block';

  }
  else {
    toTopDiv.style.display = 'none';
  }
})

window.addEventListener('load', function(){
  toTopDiv.style.display = 'none';
});

const endPoint = 3000;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= endPoint) {
    opacity = 0 + currentScroll / endPoint;
  } else {
    opacity = 1;
  }
  document.querySelector(".fadeAway").style.opacity = opacity;
});
