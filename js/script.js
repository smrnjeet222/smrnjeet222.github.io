// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var textWrapper2 = document.querySelector('.ml9 .letters2');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline({loop: false })
.add({
  targets: '.ml9 .letter',
  scale: [0, 0],
  duration: 900,
  elasticity: 600,
  delay:2500,
}).add({
  targets: '.ml9 .letter',
  translateY: ["1.1em", 0],
  translateZ: 0,
  duration: 1000,
  elasticity: 500,
  delay: (el, i) => 50 * (i+1)
}).add({
  targets: '.ml9',
  opacity: 100,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});



// .add({
  //   targets: '.ml9 .letter',
//   scale: [0, 1],
//   duration: 1500,
//   elasticity: 600,
//   delay: (el, i) => 45 * (i+1)
// }).add({
//   targets: '.ml9',
//   opacity: 100,
//   duration: 1000,
//   easing: "easeOutExpo",
//   delay: 1000
// });