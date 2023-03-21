const aprovacao = (colecao, media, status) =>{
    const resultado = colecao.map((obj) =>{
        if (obj[media] < 7){
            obj[status] = 'reprovado'
        } 
       return obj
    });
    console.log(resultado)
}

export default{
    aprovacao: aprovacao
};