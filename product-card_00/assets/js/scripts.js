const sizes = document.querySelectorAll('.sizes__size');
const colors = document.querySelectorAll('.colors__color');
const shoes = document.querySelectorAll('.shoesBackground__shoes');
const gradients = document.querySelectorAll('.gradients__gradient');
const shoesBg = document.querySelector('.card__shoesBackground');

let prevColor = "blue"
let animationEnd = true;

function changeSize() {
  sizes.forEach(size => size.classList.remove('active'));
  this.classList.add('active');
}

function changeColor() {
  if(!animationEnd) return;
  let primary = this.getAttribute('primary');
  let color = this.getAttribute('color');
  let shoe = document.querySelector(`.shoesBackground__shoes[color="${color}"]`);
  let gradient = document.querySelector(`.gradients__gradient[color="${color}"]`);
  let prevGradient = document.querySelector(`.gradients__gradient[color="${prevColor}"]`);

  colors.forEach(color => color.classList.remove('active'));
  this.classList.add('active');

  document.documentElement.style.setProperty('--primary', primary);

  shoes.forEach( shoe => shoe.classList.remove('show'));
  shoe.classList.add('show');

  gradients.forEach(g => g.classList.remove('primary-gradient', 'secondary-gradient'));
  gradient.classList.add('primary-gradient');
  prevGradient.classList.add('secondary-gradient')

  prevColor = color;
  animationEnd = false;

  gradient.addEventListener('animationend', () => {
    animationEnd = true;
  })
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(color => color.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight() {
  if(x.matches) {
    let shoesHeight = shoes[0].offsetHeight;
    shoesBg.style.height = `${shoesHeight * 0.9}px`
  } else {
    shoesBg.style.height = "475px";
  }
}

changeHeight();

window.addEventListener('resize', changeHeight)