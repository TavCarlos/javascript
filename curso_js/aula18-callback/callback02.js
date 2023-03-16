fruits = ['banana', 'apple', 'lemon', 'pear']

function EachFruit(regra) { //EachFruit vai receber callback como parâmetro
    for (const pos in fruits) {
        regra(pos) //a const pos está dentro da função, então para joga-lo para fora eu chamo a função callback (que é parâmetro da função Eachfruit) com o 'pos' como parâmetro
    }
}

    //Recebo o parâmetro 'pos' do callback para que o valor seja reconhecido fora da função. 
EachFruit((pos) => console.log(`This fruit is ${fruits[pos]}`)) //Utilizei essa função como parâmetro para a função EachFruit



/* Callback é a função que eu passo por parâmetro*/