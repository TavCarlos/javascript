/*

Funções são ações executadas assim que são chamadas ou de decorrência de um evento.

Funções podem receber parâmetros e retornar resultados.

*/


function parimp(numero){
    if(numero % 2 == 0){
        return "Par"
    } else{
        return "Ímpar"
    }
}

let resultado = parimp(12)
console.log(resultado)