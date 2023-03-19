var ingredientes = ['mel', 'água', 'sal', 'mostrada']

//colocando funções em códigos você distribui a responsabilidade, essa distribuição é essencial quando se pensa em reuso

function captalizar(ingredientes){ //responsabilizade de capitalizar a primeira letra
    var modificado = []

    for (var i = 0; i < ingredientes.length; i++){
       var LetraInicial = ingredientes[i].charAt(0).toUpperCase();
       var restoTexto = ingredientes[i].slice(1);
       var resultado = LetraInicial + restoTexto
   
       modificado[i] = resultado
    }
    return modificado;
} 


function ordenar(ingredientes){
    return ingredientes.sort(function(a,b){
       return a.localeCompare(b);
    });
}
//Agora tenho duas funções, uma que capitaliza e uma que ordena, mas como juntar os resultados?


var resultadoCapitalizacao = captalizar(ingredientes)
var resultadoOrdenacao = ordenar(resultadoCapitalizacao) //ordenar o resultado da função captalizar
//Não é a melhor forma de resolver o problema de juntar os resultados, pois desse modo a função capitalizar foi modificado pelo função ordenar.


console.log(resultadoCapitalizacao)
console.log(resultadoOrdenacao)