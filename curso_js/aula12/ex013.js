var agora = new Date() //preciso dessa variável para guardar a data
var hora = agora.getHours() // .getHours consigo colocar a hora do computador dentro da variável
console.log(`Agora são exatamente ${hora} horas.`)

if (hora > 5 && hora < 12){
    console.log('Bom dia!')
} else if(hora >= 12 && hora < 18){
    console.log(`Boa Tarde!`)
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite!')
} else{
    console.log('Boa madrugada')
}
