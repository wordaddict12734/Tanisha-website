 window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 0);
};
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
})
ScrollReveal().reveal('.home .home-content h1',{delay:500, origin: 'left'});
ScrollReveal().reveal('.home .home-content h3',{delay:600, origin: 'right'});
ScrollReveal().reveal('.home .parent',{delay:600});
ScrollReveal().reveal('.home .home-img',{delay:500, origin: 'right'});
ScrollReveal().reveal('.title-s',{delay:500, origin: 'left', interval: 200});
ScrollReveal().reveal('.content .about-img',{delay:600, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.content .text-box',{delay:700, origin: 'right', interval: 200});
ScrollReveal().reveal('.Education .design-section',{delay:500, origin: 'right', interval: 200});
ScrollReveal().reveal('.Skills .container',{delay:500, origin: 'right', interval: 200});
ScrollReveal().reveal('.contact .heading',{delay:500, origin: 'left', interval: 200});
ScrollReveal().reveal('.contact .input-box',{delay:500, origin: 'right', interval: 200});
ScrollReveal().reveal('.contact .btn',{delay:500, origin: 'bottom', interval: 200});
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;