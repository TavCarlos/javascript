function soma(n1 = 0, n2 = 0){ //o = 0 cria parâmetros já definidos caso o valor deles são sejam passados ao chamar a função. Logo, se eu passar somente o valor do n1 ele irá considerar o valor n2 como 0.
    return n1 + n2
}

let somar = soma(2, 5)
console.log(somar)