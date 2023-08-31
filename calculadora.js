var somar = require("./modulos/somar");
var media = require("./modulos/media");
var divisao = require("./modulos/divisao");
var multi = require("./modulos/multi");
var mensagem = require("./modulos/mensagem");

console.log(`A soma entre 20 + 90 é: ${somar(20,90)}`);
console.log(`A média entre 20 + 90 é: ${media(20,90)}`);
console.log(`A multiplicação entre 20 + 90 é: ${multi(20,90)}`);
console.log(`A divisão entre 20 + 90 é: ${divisao(20,90)}`);
console.log(mensagem("Bell"))
