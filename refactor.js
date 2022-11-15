function calculateNumberByRandom(number, operator) {
  // Instacia um Número Aleatório
  const numberRandon = Math.round(Math.random() * 100);

  // Objeto que evidencia o resultado para cada tipo de operador matemático
  const mathOperators = {
    sum: `Seu número é ${numberRandon + number}!`,
    subtract: `Seu número é ${numberRandon - number}!`,
    divide: `Seu número é ${numberRandon / number}!`,
    multiply: `Seu número é ${numberRandon * number}!`,
  };

  // verifica se o número enviado é do tipo "Number" e se o operador Lógico é válido (Evitar Bugs !!)
  if (typeof number === "number" && Object.keys(mathOperators).includes(operator)){
    return mathOperators[operator];
  }else{
    return "Digite um Número e um Operador Matemático Válido."
  }
}

// Executa a função passando paràmetros válido (number, operador)
console.log(calculateNumberByRandom(25, "multiply"));
