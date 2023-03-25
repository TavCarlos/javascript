const cep = document.querySelector('#cep')

//Função   -> para facilitar no HTML coloquei o ID parecido com o campo dos objetos que vem no Json
const showDate = (result) =>{ // Vai receber o Json
    for (let chave_obj in result){ 
        if(document.querySelector('#'+campo_obj)) { //vai ver se tem um ID no meu HTML parecido com o campo
            document.querySelector('#'+campo_obj).value = result[campo_obj] //colocará valor campo no input designado
        }
    }
}




//Recebendo da informações de CEP da API
cep.addEventListener('blur', (event) =>{ //bluer -> perdeu foco 
    let search  = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }


    fetch(`https://viacep.com.br/ws/${search}/json/`, options) //vou acessar a URL com essas opções
    .then((response) => response.json() //.then -> conseguiu acessar a API? Consegue me trazer em formato json?
        .then((data) => showDate(data)) //.then -> se conseguir trazer em formato jason 
    )
    .catch(e => console.log('ERRO: '+ e,message)) //.catch referente a mensagem de erro
});