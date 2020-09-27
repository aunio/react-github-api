const options = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

const date = new Date(2020, 08, 05);

console.log(date.toLocaleDateString("pt-br", options)); //05 de Setembro de 2020
console.log(date.toLocaleDateString("pt-br", { ...options, month: 'numeric'})) // 05/09/2020

/////

const { DateTimeFormat } = Intl;

const data = new Date('2020-11-31')

let formattedDate = DateTimeFormat('pt-br').format(date);