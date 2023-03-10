var submit = window.document.querySelector('input#gerador')
submit.addEventListener('click', tabuada)

function tabuada(){
    var txt = window.document.querySelector('input#inumero')
    if (txt.value.length == 0){
        alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var numero = Number(txt.value)
        var p = document.createElement("p")
        //p.style.textAlign = "left"
        var operador = window.document.getElementsByName('tabuada')
        var res = document.getElementsByTagName('p')[0]

        if (operador[0].checked){
            res.innerHTML = `Multiplicação de: ${numero}`

            for (var contador = 1; contador <= 10; contador++ ){ 
                p.innerHTML += `${contador} x ${numero} = ${contador*numero} <br>`
            }
        
        } else{
            res.innerHTML = `Divisão de: ${numero}`

            for (var contador = 1; contador <=10; contador++){
                var multi = contador*numero
                p.innerHTML += `${multi} / ${numero} = ${contador} <br>`
            }
        }
        res.appendChild(p) 
    }
}
