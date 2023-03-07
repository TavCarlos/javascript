var submit = window.document.querySelector('input#submit')
submit.addEventListener('click', verificar)

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iidade')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = '' //variável vai começar vazia
        var img = document.createElement("img") //coloca uma tag <img> pelo javascriot
        img.setAttribute('id', 'foto') //cria um atributo id='foto' pelo javascrit na tag img 
        if (fsex[0].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <  10){
                //Criança
                img.setAttribute("src", '../imagem/foto-bebe-f.png') //coloco o atributo src na img que foi criado pelo javascript
            } else if (idade < 21){
                img.setAttribute('src', '../imagem/foto-jovem-f.png')
            } else if (idade < 50){
                img.setAttribute('src', '../imagem/foto-adulto-f.png')
            } else {
                img.setAttribute('src', '../imagem/foto-idoso-f.png')
            }
        } else {
            genero = 'Homem'
            if (idade >= 0 && idade <  10){
                img.setAttribute("src", '../imagem/foto-bebe-m.png')
            } else if (idade < 21){
                img.setAttribute('src', '../imagem/foto-jovem-m.png')
            } else if (idade < 50){
                img.setAttribute('src', '../imagem/foto-adulto-m.png')
            } else {
                img.setAttribute('src', '../imagem/foto-idoso-m.png')
            }
        } 
        
        res.style.textAlign = 'Center' //centralizando a linha com Javascript
        res.innerHTML = `Detectamos ${genero} de ${idade} anos!`
        res.appendChild(img) // manda aparecer a imagem da tag img(criada pelo javascript. res.apprendChild(img) faz com que a tag img apareça logo após o res.innerHTML
    }
}