var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()


window.addEventListener('DOMContentLoaded', loading) //aciona a função ao atualizar da página



function loading(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector ('img#imagem')
   
    
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos!`
    
    if (hora >= 0 && hora < 12){
        img.src = '../imagem/foto-manha.jpg' //Troco a imagem da div > img
        document.body.style.background = '#C057DE'

    } else if (hora >= 12 && hora < 18){
        img.src = '../imagem/foto-tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = '../imagem/foto-noite.jpg'
        document.body.style.background = '#515154'//muda a background color do body
    }
}