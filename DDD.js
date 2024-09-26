/*Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:

Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado

Entrada

A entrada consiste de um único valor inteiro.

Saída

Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.*/

let ddd = parseInt(prompt("Insira o DDD: "))

if (ddd === 61){
    document.write("Brasilia")
}else if(ddd === 71){
    document.write("Salvador")
}else if(ddd === 11){
    document.write("Sao Paulo")
}else if(ddd === 21){
    document.write("Rio de Janeiro")
}else if(ddd === 32){
    document.write("Juiz de Fora")
}else if(ddd === 19){
    document.write("Campinas")
}else if(ddd === 27){
    document.write("Vitoria")
}else if(ddd === 31){
    document.write("Belo Horizonte")
}else{
    document.write("DDD não cadastrado")
}