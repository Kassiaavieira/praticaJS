function showResult(avrg, stdName){

  if(avrg >= 7){
    return `Parabéns, ${stdName}! Você foi aprovado(a) no concurso!`
  }
  else{
    return `${stdName}, você não passou, mas tente novamente na próxima!`
  }

}

function printStudant(name, note1, note2){
  let average = ((note1+note2)/2);
  let result = showResult(average, name);
  alert(`
    A média do(a) aluno(a) ${name} é de: ${average}
    ${result}
  `);
}

let studants = [
  {
    name: "Mayk",
    n1: 8.0,
    n2: 9.0,
  },
  {
    name: "Diego",
    n1: 8.8,
    n2: 10.0,
  },
  {
    name: "Kassia",
    n1: 8.5,
    n2: 5.2,
  },
  {
    name: "Maria",
    n1: 6.0,
    n2: 7.5,
  },
]

let option;

while(option != 5){

  option = prompt(`
  Selecione o número do(a) aluno(a) que deseja inspecionar:

  1. Mayk
  2. Diego
  3. Kassia
  4. Maria

  5. Sair
  
  `);
  
  if(option == 1 || option == 2 || option == 3 || option == 4 || option == 5){
  
    printStudant(studants[option-1].name, studants[option-1].n1, studants[option-1].n2);
  }

  else{
    alert("Opção inválida, tente novamente.");
  }
  

}