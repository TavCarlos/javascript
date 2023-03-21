function FnCapitalizar(colecao, attr){
    if (colecao.length > 0){
        if (typeof colecao[0] == 'object' && attr){
            colecao.map(item => item[attr] = item[attr].charAt(0).toUpperCase() + item[attr].slice(1));
        }else{
            colecao.map(item => item = item.charAt(0).toUpperCase() + item.slice(1));
        }
        return colecao
    }
}


function Fnordenar(colecao, attr){
    return attr ? //tem atributo?
        colecao.sort(function (a,b){
            return typeof a[attr] == 'number'? //se tiver atributo, o retorno de typeof é 'number?'
            a[attr] - b[attr]: //se sim, faça
            a[attr].localeCompare(b[attr]) //se não, faça
        }): //se não tem atributo
        colecao.sort(function (a,b){
            return typeof a == 'number'? //o retorno de typeof é é 'number?
            a - b : //se sim
            a.localeCompare(b) //se não
        });

}


function FnOrdenarcescente(colecao){
    colecao.sort(function (a,b){
        if (a.media < b.media){
            return -1 
        } else {
            return 1
        }
    });
    return colecao
}


export default {
    capitalizar: FnCapitalizar,
    ordenar: FnOrdenarcescente
}