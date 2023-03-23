let email = 'teste@teste.com'

const verificar = (email) => {
    regex = /([a-z0-9\.]{2,})@([a-z0-9]{2,})(\.[a-z]{2,})(\.[a-z]{2,})?/g;
    if(regex.test(email) == true){
        console.log('Deu certo! :]')
    } else{
        console.log('Deu errado! :[')
    }
}
verificar(email)