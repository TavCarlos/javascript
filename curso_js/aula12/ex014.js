var agora = new Date()
var diaSem = agora.getDay()

/* Para o JavaScript em relação aos dias da semana
    Se eu colocar um console.log(diaSem) ele me dará um número relacionado com o dia da semana, sendo:

    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

//O switch é mais aconselhável utilizar dados pontuais. Se precisar de intervalos é mais valioso utilizar o if 
switch(diaSem){ //Caso var diaSem =
    case 0: 
        console.log('Domingo')
        break //BREAK É OBRIGATÓRIO EM CADA CASE, senão ele irá executar todos os outros cases até encontrar um break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3: 
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default: //é como se fosse um else: é utilizado quando nenhum dos cases acima é executado.
        console.log('Erro! Dia inválido.')
        break
}
