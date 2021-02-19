//If ternário

let dia = 'sabado';

let resultado = dia == "sadado" ? "Vou ao samba" : "Vou a praça";

console.log(resultado);

//Switch

switch (dia) {
      case "segunda":
            console.log("vou tomar café");
            break;
      case "quarta":
            console.log("vou ao cinema");
            break;
      case "terça":
            //implementa o que deverá ser feito
      default:
            console.log("eu não vou fazer nada");
}

//Exercicios

//Fim de semana
let dia = 'segunda-feira';

function fimDeSemana(dia) {
      switch (dia) {
            case "sexta-feira":
                  console.log('Bom fim de semana');
                  break;
            case "segunda-feira":
                  console.log('Boa semana!');
                  break;
            default:
                  console.log('Bom dia!')
      }
}

//Eu tenho classes
let dia = 'sábado';

function fimDeSemana(dia) {
      switch (dia) {
            case "segunda":
                  console.log("você tem aulas!");
                  break;
            case "quarta":
                  console.log("você tem aulas!");
                  break;
            case "sexta":
                  console.log("você tem aulas!");
                  break;
            default:
                  console.log("você não tem aulas")
      }
}


