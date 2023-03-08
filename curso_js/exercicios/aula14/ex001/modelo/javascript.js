var submit = document.querySelector('input#submit')
submit.addEventListener('click', contar)

function contar(){

    var iniciotxt = document.getElementById('iinicio')
    var fimtxt = document.getElementById('ifim')
    var passotxt = document.getElementById('ipasso')
    var res = document.querySelector('p#res')

    if (iniciotxt.value.length == 0 || fimtxt.value.length == 0 || passotxt.value.length == 0){
        window.alert('Por favor, verifique os valores novamente.')
    } else {
        res.innerHTML = 'Contando: '
        var inicio = Number(iniciotxt.value)
        var fim = Number(fimtxt.value)
        var passo = Number(passotxt.value)

        if (inicio < fim){
            for (var contador = inicio; contador <= fim; contador += passo){
            res.innerHTML += `${contador}, `
            }
        } else {
            for (contador = inicio; contador >= fim; contador -= passo){
                res.innerHTML += `${contador}, `
            }
        } 
    }
        
   
}