let textWrapper = document.querySelector('.h1-1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.h1-1 .letter',
    translateY: ["1.4em", 0],
    translateZ: 0,
    duration: 1750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.h1-1',
    opacity: 0,
    duration: 1200,
    easing: "easeOutExpo",
    delay: 1000
  });