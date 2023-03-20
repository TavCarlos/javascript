function FnCapitalizarNovo(colecao, atributo){

    if (typeof colecao[0] == 'object' ){
        var resultado = colecao.map(function (obj){ //função vai receber os objetos da colecao como atributo
            var LetraInicial =
                obj[atributo].charAt(0).toUpperCase();//objeto[propriedade_nome]; -> o 'atrib' -> index.js
            var restoTexto =
                obj[atributo].slice(1);
            
            obj[atributo] = LetraInicial + restoTexto

            return obj; //vai retornar o objeto modificado para a variável 'resultado'
        }); //.map() é um metodo que irá correr por todo o array
    }
    console.log(resultado)
}



function FnCaptalizar(vetor){
    var modificado = []

    for (var i = 0; i < vetor.length; i++){
       var LetraInicial = vetor[i].charAt(0).toUpperCase();
       var restoTexto = vetor[i].slice(1);
       var resultado = LetraInicial + restoTexto
   
       modificado[i] = resultado
    }
    return modificado;
} 

function FnOrdenar(vetor){
    return vetor.sort(function(a,b){
       return a.localeCompare(b);
    });
}

const FnCaixaAlta = (vetor) => {
    let modificador = []
    for (let pos in vetor){
        modificador[pos] = vetor[pos].toUpperCase();
    }
    return modificador;
}


export default {
    captalizar: FnCaptalizar,
    capitalizarNovo: FnCapitalizarNovo, 
    ordenar: FnOrdenar,
    caixaAlta: FnCaixaAlta
};

