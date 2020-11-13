const card = document.querySelector('.card');
const container = document.querySelector('.container');

const toy = document.querySelector('.toy img');
const infoTitle = document.querySelector('.info__title');
const infoSubtitle = document.querySelector('.info__subtitle');
const infoSizes = document.querySelector('.info__quality');
const purchaseButton = document.querySelector('.purchase__btn');

container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener('mouseenter', (e) => {
  card.style.transform = "none";

  toy.style.transform = "translateZ(100px)"
  infoTitle.style.transform = "translateZ(20px)"
  infoSubtitle.style.transform = "translateZ(20px)"
  infoSizes.style.transform = "translateZ(10px)"
  purchaseButton.style.transform = "translateZ(10px)"
})

container.addEventListener('mouseleave', (e) => {
  // card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  toy.style.transform = "translateZ(0px)"
  infoTitle.style.transform = "translateZ(0px)"
  infoSubtitle.style.transform = "translateZ(0px)"
  infoSizes.style.transform = "translateZ(0px)"
  purchaseButton.style.transform = "translateZ(0px)"
})