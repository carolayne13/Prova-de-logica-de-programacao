/*Elabore um programa em Javascript que leia a velocidade permitida em uma estrada e a velocidade de um condutor. 
Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, 
exiba “Multa Leve”. E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave”.*/

var velocidade = parseInt(prompt("Informe a velocidade permitida: " ))
var condutor = parseInt(prompt("Informe a velocidade de um condutor: "))

somaDaVelocidade = velocidade * 1.20

if(condutor <= velocidade){
    console.log("Sem Multa")
}else if(condutor === somaDaVelocidade){
    console.log("Multa Leve")
}else{
    console.log("Multa Grave")
}