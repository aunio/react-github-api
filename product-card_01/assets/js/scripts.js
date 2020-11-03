const card = document.querySelector('.card');
const container = document.querySelector('.container');

const sneaker = document.querySelector('.sneaker img');
const infoTitle = document.querySelector('.info__title');
const infoSubtitle = document.querySelector('.info__subtitle');
const infoSizes = document.querySelector('.info__sizes');
const purchaseButton = document.querySelector('.purchase__btn');

container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener('mouseenter', (e) => {
  card.style.transform = "none";

  sneaker.style.transform = "translateZ(150px)"
  infoTitle.style.transform = "translateZ(150px)"
  infoSubtitle.style.transform = "translateZ(150px)"
  infoSizes.style.transform = "translateZ(150px)"
  purchaseButton.style.transform = "translateZ(150px)"
})

container.addEventListener('mouseleave', (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  sneaker.style.transform = "translateZ(0px)"
  infoTitle.style.transform = "translateZ(0px)"
  infoSubtitle.style.transform = "translateZ(0px)"
  infoSizes.style.transform = "translateZ(0px)"
  purchaseButton.style.transform = "translateZ(0px)"
})