var data = new Date()
var data = data.getFullYear()

var verificar = window.document.querySelector('input#submit') 
verificar.addEventListener('click', submeter)

var img = window.document.querySelector('img#imagem')

var resposta = window.document.getElementById('res')


function submeter(){

    
    
    //pegar o input:number
    var anoidadetxt =  window.document.querySelector('input#iidade')
    
    if(anoidadetxt.value.length == 0 || Number(anoidadetxt.value) >  data){
        window.alert ('Verifique os dados e tente novamente!') //aleta caso o tamanho do texto for 0 ou for menor que a data atual
    
    } else {
        var ano_nasc = Number(anoidadetxt.value)
        idade = data - ano_nasc


        //pegar o input:radio
        var txtsex = window.document.getElementsByName('sexo') 
        var genero = ''
        if (txtsex[0].checked){ //no radio, a primeira marcação é [0], segunda é [1] e assim por diante.
            genero = 'Mulher'
        } else {
            genero = 'Homem'
        }
        
        //aparecendo a foto
        if(idade < 13 && genero == 'Mulher'){
            img.src = '../imagem/foto-bebe-f.png'
        } else if (idade < 13 && genero == 'Homem'){
            img.src = '../imagem/foto-bebe-m.png'
        } else if (idade < 21 && genero == 'Mulher'){
            img.src = '../imagem/foto-jovem-f.png'
        } else if (idade < 21 && genero == 'Homem'){
            img.src = '../imagem/foto-jovem-m.png'
        } else if (idade < 60 && genero == 'Mulher'){
            img.src = '../imagem/foto-adulto-f.png'
        } else if (idade < 60 && genero == 'Homem'){
            img.src = '../imagem/foto-adulto-m.png'
        } else if (idade >= 60 && genero == 'Mulher'){
            img.src = '../imagem/foto-idoso-f.png'
        } else if (idade >= 60 && genero == 'Homem'){
            img.src = '../imagem/foto-idoso-m.png'
        }
    } 

    

    resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`

}