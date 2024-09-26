/*Crie um programa que solicite ao usuário 3 notas (valores numéricos) e calcule a média aritmética dessas notas.
 Se a média for maior ou igual a 7, exiba a mensagem "Aprovado"; caso contrário, exiba "Reprovado".*/

let nota1 = parseInt(prompt("Informe a 1° nota: "))
let nota2 = parseInt(prompt("Informe a 2° nota: "))
let nota3 = parseInt(prompt("Informe a 3° nota: "))

media = (nota1 + nota2 + nota3)/3

if (media >= 7){
    document.write("Aprovado")
}else if(media <= 6){
    document.write("Reprovado")
} 