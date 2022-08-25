/**********************************************************************
 * Objetivo: 
 * Autor: Nicolas Dobbeck Mendes 
 * Data de Criação: 25/ 08/2022
 * Data de modificação: 
 * O que foi modificado:
 * Versão: 1.0
 *********************************************************************/
console.log('----------Par e Impar com Array----------');
const {pares, impares} = require('./funcoes')
var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//ENTRADA DE DADOS
entradaDados.question('Digite o primeiro número: ', function (numero1) {
    let numero1 = parseFloat(valor1)
    entradaDados.question('Digite o segundo número', function (numero2){
        let numero2 = parseFloat(valor2)
    })
})
console.log(pares(numero1, numero2))
console.log(impares(numero1, numero2))