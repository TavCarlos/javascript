function FnCapitalizarNovo(colecao, atributo){
    //Veirificar se o primeiro termo é um objeto ou uma string para capitalizar a primeira letra
    
    if (typeof colecao[0] == 'object' ){
        var resultado = colecao.map(function (obj){ //função vai receber os objetos da colecao como atributo
            var LetraInicial =
                obj[atributo].charAt(0).toUpperCase();//objeto[propriedade_nome]; -> o 'atrib' -> index.js
            var restoTexto =
                obj[atributo].slice(1);
            
            obj[atributo] = LetraInicial + restoTexto

            return obj; //vai retornar o objeto modificado para a variável 'resultado'
        }); //.map() é um metodo que irá correr por todo o array
    } else {
        var resultado = colecao.map((array) =>{
            var LetraInicial = 
                array.charAt(0).toUpperCase();
            var restoTexto = 
                array.slice(1)
            array = LetraInicial + restoTexto

            return array
        });
    }
    console.log(colecao[1])
    console.log(resultado)
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
    capitalizarNovo: FnCapitalizarNovo, 
    ordenar: FnOrdenar,
    caixaAlta: FnCaixaAlta
};

