var submit = window.document.querySelector('input#gerador')
submit.addEventListener('click', tabuada)

function tabuada(){ //Checando se o usuário colocou texto
    let txt = window.document.querySelector('input#inumero')
    if (txt.value.length == 0){
        alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        let numero = Number(txt.value)
        let p = document.createElement("p") //paragráfo criado com javascript
        //p.style.textAlign = "left"
        let operador = window.document.getElementsByName('tabuada')
        let res = document.getElementsByTagName('p')[0] //parágrafo já existente no HTML


        //Multiplicação
        if (operador[0].checked){
            res.innerHTML = `Multiplicação de: ${numero}`

            for (let contador = 1; contador <= 10; contador++ ){ 
                
                p.innerHTML += `${contador} x ${numero} = ${contador*numero} <br>`
            }
        
            //divisão
        } else{
            res.innerHTML = `Divisão de: ${numero}`

            for (let contador = 1; contador <=10; contador++){
                let multi = contador*numero
                p.innerHTML += `${multi} / ${numero} = ${contador} <br>`
            }
        }
        res.appendChild(p)
    }
}
