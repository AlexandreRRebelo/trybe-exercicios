const salário_bruto=3000
let ali_inss;
let ali_ir;
let imposto;

//inss
if (salário_bruto <= 1556.94) {
    ali_inss= salário_bruto * 0.08;
  } 
  else if (salário_bruto <= 2594.92) {
    ali_inss = salário_bruto * 0.09;
  } 
  else if (salário_bruto <= 5189.82) {
    ali_inss = salário_bruto * 0.11;
  } 
  else {
    ali_inss = 570.88;
  }
const salario2 = salário_bruto - ali_inss;

//IR
if (salario2 <= 1903.98) {
    alior= 0; 
  }
    else if (salario2 <= 2826.65) {
        ali_ir = (salario2 * 0.075) - 142.80;
  } else if (salario2 <= 3751.05) {
        ali_ir = (salario2 * 0.15) - 354.80;
  } else if (salario2 <= 4664.68) {
        ali_ir = (salario2 * 0.225) - 636.13;
  } else {
        ali_ir = (salario2 * 0.275) - 869.36;
  };
  console.log(salario2 - ali_ir)