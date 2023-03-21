import nomes from './nome.js';
import modular from './modular.js'

let NomesCapitalizados = modular.capitalizar(nomes, 'nome')
console.log(NomesCapitalizados)


let ordenarMedia = modular.ordenar(nomes, 'media');
console.log(ordenarMedia)