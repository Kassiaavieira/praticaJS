
let n1;
let n2;
while(isNaN(n1)){
  n1 = prompt("Digite o primeiro número");
  if(isNaN(n1)){
    alert("Digite um número válido!");
  }
}
while(isNaN(n2)){
  n2 = prompt("Digite o segundo número");
  if(isNaN(n2)){
    alert("Digite um número válido!");
  }
}
let sum;
let equal;

n1 = Number(n1);
n2 = Number(n2);

if((n1+n2)%2 == 0){
  sum = "par";
}
else{
  sum = "impar";
}

if(n1 == n2){
  equal = "iguais";
}
else{
  equal = "diferentes";
}

alert(`

  Relatório das operações:

  Soma dos dois números: ${(n1 + n2).toFixed(2)}
  Subtração dos dois números: ${(n1 - n2).toFixed(2)}
  Multiplicação dos dois números: ${(n1 * n2).toFixed(2)}
  Divisão dos dois números: ${(n1 / n2).toFixed(2)}
  Resto da divisão dos dois números: ${(n1 % n2).toFixed(2)}

  A soma dos dois números é ${sum}
  Os números inseridos são ${equal}

`);