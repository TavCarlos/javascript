//Modularização -> Ato de dividir uma aplicação; separando a aplicação em módulos

import modificador from "./modificador.js" // vai importa o objeto de exportação default{}; como no exemplo, há duas funções que é importada.


var ingredientes = ['mel', 'água', 'sal', 'mostrada']
var resultadoCapitalizacao = modificador.captalizar(ingredientes)
var resultadoOrdenacao = modificador.ordenar(resultadoCapitalizacao)
var resultadoCaixaAlta = modificador.caixaAlta(ingredientes)
//Para utilizar uma função específica dentro do objeto eu digo 'NomeImport.NomeDaFunçãoExportada'
console.log(resultadoCapitalizacao)
console.log(resultadoOrdenacao)
console.log(resultadoCaixaAlta)