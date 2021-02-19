//length
let texto = "Oi eu sou o Picles";
console.log(texto.length);

//indexOf
console.log(texto.indexOf(4));

//slice
let palavra = texto.slice(0, 3);
console.log(palavra);
console.log(texto);
//console.log(texto.slice(0, 3));

//trim
console.log(texto.trim());

//split
console.log(texto.split(" "));

//replace
let textoNovo = texto.replace("Picles", "Gabriel");
console.log(textoNovo);

//Exercicio 

//Completar a URL
function dominio(url) {
      if (!url.startsWith("http://") && !url.startsWith("http://")) {
            url = "http://" + url;
      }
      console.log(url);
      return url;
}

//Contar os caracteres
let texto = "tita";
console.log(texto.length);

//Substituição rápida
function substituicaoRapida(texto, procurar, substituir) {
      return texto.replace(procurar, substituir);
}
let textoNovo = substituicaoRapida("Boa tarde", "tarde", "noite");
console.log(textoNovo);

//Está falando de mim?
function menciona(texto, palavra) {
      return texto.indexOf(palavra) >= 0;
}

//Apenas o nome
const texto = "Olá, sou Antonio!"
texto.slice(9);
let nomeUsuario = "Antonio";
