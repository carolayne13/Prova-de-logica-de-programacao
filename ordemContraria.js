/*Crie um programa em JavaScript que pergunte ao usuário 3 números diferentes e armazene-os em um array.
 Em seguida, exiba o array com os números digitados. Após isso, inverta a ordem dos elementos do array para que a 
 sequência de números fique na ordem contrária àquela que foi digitada. Por exemplo, se os números inseridos forem 1, 2, 3, o programa deve exibir 3, 2, 1.*/

let num1 = parseInt(prompt("Insira um números: "))
let num2 = parseInt(prompt("Insira um números: "))
let num3 = parseInt(prompt("Insira um números: "))

array = [num1,num2,num3]

console.log(array)

array.reverse()
 
console.log(array)