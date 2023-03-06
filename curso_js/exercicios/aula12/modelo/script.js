var data = new Date()
var hora = data.getHours()


window.addEventListener('DOMContentLoaded', loading) //aciona a função ao atualizar da página



function loading(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector ('div#img')
    
    msg.innerHTML = `Agora são ${hora} horas!`
}