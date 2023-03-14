var analisar = document.querySelector('input#submeter')
    analisar.addEventListener('click', adicionar)

var concluir = document.querySelector('input#iacabar')
    concluir.addEventListener('click', finalizar)

    let out = document.querySelector('div#saida')
    let paragrafo = document.createElement('p')

var numeros = []

function adicionar(){

    let txt = document.querySelector('input#inumero')
    let numero = Number(txt.value)

    let checar = arrayanalisar(numero/*,val*/)

    if(numero < 1 || numero > 100 || checar == "1"){
        alert('Valor inválido ou já encontrado na lista.')
    } else{
         let val = document.querySelector('select#selval')
         let item = document.createElement('option')
         numeros.push(numero)
         item.text = `Valor ${numero} adicionado`
         val.appendChild(item)
         out.appendChild(paragrafo)
         paragrafo.innerHTML = ''
    }
    txt.value = '' // ao adicionar um número, a caixa do input:number fica vazia
    txt.focus() //o cursor volta para o input:number
}

function arrayanalisar(n){
    verificador = 0
    for(let posicao in numeros){
        if  (n == numeros[posicao]){
            verificador++
        }
    }
    if (verificador == 1){
        return "1"
    } else{
        return "0"
    }
}

/*function arrayanalisar(n, l){
    if (l.indexOf(Number(n)) != -1 {
        return true
    } else
        return false
} */

function finalizar(){
    let tot = numeros.length
    let maior = numeros[0]
    let menor = numeros[0]
    let somar = 0
    let media = 0

    for(pos in numeros){
        somar += numeros[pos]
        if (numeros[pos] > maior){
            maior = numeros[pos]
        }
        if (numeros[pos] < menor){
            menor = numeros[pos]
        }
    }
    media = somar/tot

    paragrafo.innerHTML += `Ao todo, temos ${tot} elementos cadastrados; </br>`
    paragrafo.innerHTML += `O maior valor informado foi: ${maior}. </br>`
    paragrafo.innerHTML += `O menor valor informado foi: ${menor}. </br>`
    paragrafo.innerHTML += `A soma entre os elementos é: ${somar} </br>`
    paragrafo.innerHTML += `A média entre os elementos é: ${media}`

}


/* var testando = document.querySelector('p#teste')
    testando.innerHTML = 'deu certo!' */