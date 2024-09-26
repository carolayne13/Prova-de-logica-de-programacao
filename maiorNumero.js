/*Faça um programa JavaScript que receba 3 números informados pelo usuário e em seguida apresente uma mensagem
 de alerta informando qual é o maior número dentre os números informados.*/

let num1 = parseInt(prompt("Informe um número: "))
let num2 = parseInt(prompt("Informe um número: "))
let num3 = parseInt(prompt("Informe um número: "))

if (num1 > num2 && num1 > num3){
    document.write("O maior numero é o: "+num1)
}else if (num2 > num3 && num2 > num1){
    document.write("O maior número é o: "+num2)
}else if (num3 > num2 && num3 > num1){
    document.write("O maior número é o: "+num3)
}