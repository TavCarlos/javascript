
const verificador = (email, funcao) => { //recebe o email e a funcao callback como parametro
    if(funcao(email) == true){ 
        console.log('deu certo')
    }else{
        console.log('deu errado') 
    }
}

function callback(email){ //função que verifica se o email está dentro dos padrão regex criado.
    regex = /([a-z0-9\.]{2,})@([a-z0-9]{2,})(\.[a-z]{2,})(\.[a-z]{2,})?/g;
    return regex.test(email)
}

verificador('teste@teste.com', callback) //passo como parâmetro o email e a função 'callback'

