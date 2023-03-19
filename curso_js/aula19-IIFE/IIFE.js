//IIFE - Immediately Invoked Function Expression

const NomeForaScopo = (function (){
    let nome = 'Carlos'//variável nome não é acessível fora do scopo, sendo necessário atribuir a function a uma const
    return nome
})();

console.log(NomeForaScopo);

//contém duas partes principais. A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global.


(function (n1,n2){ // a função acima precisa dos ; para que a função IIFE ocorra.
    console.log(n1+n2)
})(5,6);