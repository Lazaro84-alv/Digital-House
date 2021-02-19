const somar = () => console.log("Estou em uma arrow function")

const somar = numero => console.log("Recebi um numero: " + numero)

const somar = (numeroA, numeroB) => console.log("recebi um numero: " + numeroA)

somar(10, 30);

const somar = (numeroA, numeroB) => {
      console.log("recebi um numero: " + numeroA)
      return numeroA + numeroB
}

console.log(somar(20, 56));
