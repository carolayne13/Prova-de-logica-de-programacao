/*Escreva um programa que simule uma calculadora simples. O programa deve solicitar dois números e um operador matemático 
(adição, subtração, multiplicação ou divisão). Exiba o resultado da operação.*/

let num1 = parseInt(prompt("Informe um número: "))
let num2 = parseInt(prompt("Informe um número: "))
let operador = prompt("Escolha o operador matemático: ")

adicao =  num1 + num2
divisao = num1 / num2
subtracao = num1 - num2
multiplicacao = num1 * num2


if (operador === "+"){
    document.write(adicao)
}else if (operador === "/"){
    document.write(divisao)
}else if (operador === "-"){
    document.write(subtracao)
}else if (operador === "*"){
    document.write(multiplicacao)
}



