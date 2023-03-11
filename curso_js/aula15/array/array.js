

    let num = [5, 8, 2, 9, 3]


    num.push(1) // cria mais um elemento e adiciona o valor 1 no ultimo índice
    num.sort() //Coloca os elementos em ordem crescente
    console.log(num) //mostra o vetor
    console.log(`O vetor tem ${num.length} elementos;`) //mostra o cumprimento do vetor, ou seja, quantos elementos tem
    console.log(`O primeiro valor do vetor é ${num[0]};`) //mostra o elemento que está na primeira posição



    //Forma tradicional do percurso do vetor
    for(let posicao = 0; posicao < num.length; posicao++){ //utilizando essa estrutura de repetição é possível escrever todos os elementos sem aparecer a formatação do array.
        console.log(`A posição ${posicao} possui o valor ${num[posicao]}`)
    }

    //forma mais simplificado
    for(let posicao in num){ //ler-se ''para cada posição dentro de num'' Tal estrutura só funciona para vetores
        console.log(num[posicao])
    }

    num.indexOf(8) //vai procurar dentro do vetor onde está o valor 8. Ou seja, me retornará a chave onde esse valor se encontra
    console.log(`O elemento 8 se encontra na chave ${num.indexOf(8)}`)
    console.log(`O valor 7 se encontra na chave: ${num.indexOf(7)}`) //retornará o valor -1, pois não encontrou o valor dentro do array
