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

//Só é possível exportar um default. Ou seja, não consigo exporta a função captalizar a ordenar através do: 'export deafault'. Nisso, é possível criar um objeto que encapsula funcionalidades.

export default {
    captalizar: FnCaptalizar,
    ordenar: FnOrdenar,
    caixaAlta: FnCaixaAlta
    /*O que está a esquerda dos dois pontos é chamado de chave ou propriedade.
    O que está a direita dos dois pontos é um valor
    O nome que está a esquerda é que estará visível para a importação no index.js.*/

};

