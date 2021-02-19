let texto = "quinta";
let numero = 1.10;
console.log(typeof (texto));

//parseInt

let texto = "5";
let numero = parseInt(texto);
console.log(parseInt(texto));
console.log(typeof (numero));

let texto = "123abc";
let numero = Number(texto);
console.log(numero); //NaN

let texto = "123abc";
let numero = parseInt(texto);
console.log(numero); //123

//toString

let numero = 111;
let texto = String(numero);
console.log(texto);

let texto = numero.toString();
console.log(typeof (texto));

//parseFloat
let numero = "12,6";
console.log(numero.parseFloat());





