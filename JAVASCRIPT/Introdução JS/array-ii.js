let pessoa = ["chiquitita"];
console.log(pessoa);

//push
pessoa.push(6);
console.log(pessoa);

//pop
let excluido = pessoa.pop();
console.log(excluido);

//unshift
pessoa.unshift(36);
console.log(pessoa);

//shift
pessoa.shift();
console.log(pessoa);

//indexOf
let pessoa = ["alves", 1.81, "alves"];
console.log(pessoa.indexOf(1.81));

//lastIndexOf
console.log(pessoa.lastIndexOf("alves"));

//join
console.log(pessoa.join("-"));

//Exercicios

//IndexOf
let alunos = ["João", "Pedro", "Jorge", "Francisco"];
let indiceJoao = alunos.indexOf("João");

console.log(indiceJoao);

let indiceFrancisco = alunos.indexOf("Francisco");
console.log(indiceFrancisco);

//join
let arrayFrase = ["Não", "fracassei", "simplesmente", "encontrei", "dez", "mil", "soluções", "equivocadas"]

let fraseNova = arrayFrase.join(" ");
console.log(fraseNova);

//pop
let estudante = [
      {
            nome:"Álvaro",
            media: 9,
            curso: "Android"
      },
      {
            nome: "Daniel",
            media: 6,
            curso: "Full Stack"
      },
      {
            nome: "Alexis",
            media: 3,
            curso: "IOS"
      }
];

let alunoFormado = estudantes.pop();
console.log(alunoFormado);

//push
