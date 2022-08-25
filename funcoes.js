const pares = function (numero1, numero2){
    let numerosPares =[]
    while (numero1 <= numero2) {
        if (numero1 % 2 == 0){
        numerosPares.push(numero1)
        }
        numero1++
    }
    return numerosPares
}
const impares = function (numero1, numero2){
    let numerosImpares =[]
    while (numero1 <= numero2) {
        if (numero1 % 2 != 0){
        numerosImpares.push(numero1)
        }
        numero1++
    }
    return numerosImpares
}

module.exports = {
    pares, impares
}