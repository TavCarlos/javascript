
/*  RegEx (Expressões Regulares);

    regexr.com

Padrões de códigos que consegue indetinficar em um sting se determinada ocorrência está la dentro: se está tudo maiusculo, se está tudo minusculo, filtro de palavras (palavrão), compartilhamento de email(consegue verificar se um enderelamento de email é válido), etc.

    let text = 'este é um texto'
    let regex = /texto/g;    //g significa global
    
    text.match(regex) -> ['texto'] //ou
    regex.exec(text) -> ['texto] //ou
    regex.test(text) -> true

//os dois primeiros iram retornar a letra/palavra/texto da string, se houver. Se não houver retornará null
//o último retornará true se houver a letra/palavra/texto no string ou false se não houver.


/ /g -> toda expressão regular fica entre as barras;
/e/g -> ira retormar todas as palavras que possuem 'e'
/te/g -> ira retormar qualquer palavra que tenha o t do lado esquerdo do e (te)
/./g -> representa qualquer caractere
/t./g -> retoma palavra que tenha t e qualquer caractere que esteja do lado direito dele.
/e|é/g -> retoma tanto palavras que tenham 'e' quanto o 'é'

/()/g -> agrupa pedaços das expressões regulares para pegar trechos específicos. Exemplo: em um telefone há: DDD + 5 dígitos + 4 dígitos. Posso agrupa-los como (DDD)(5Dígitos)(4dígitos).

/[ek]/g -> Cria padrões -> tudo que eu ponho entre as chaves ele irá produrar individualmente, retornará palavras que tenham 'e' e palavras que tenham 'k'

/[a-e]/g -> Procuro palavras que tenham ou a letra 'a' ou 'b' ou 'c' ou 'd' ou 'e' e retorno-as. [a-z] -> todas letras. Consequentemente: [0-9] -> todos os números.

/[^et]/g -> retoma todas as pelavras menos as que contém a letra e ou t.

/(s+)/g -> retoma palavras que possuem s e ss

/(s)?/g -> torna opcional, se eles não tiver na expressão, não acarretará erro. exemplo: email pode ter .br ou não. Em um formulário posso tornar o .br uma questão opcional, tornando meu email válido.

/a{2}/g -> retomo palavras que possuem 2 a's

/a{2,3}/g -> retomo a palavras quando ela possuir 2 ou 3 'a'

/a{2,}/g -> retomo palavras que possuem 2 ou mais 'a's'

/^a/g -> retoma caso a string começa com 'a'

/a$/g -> retoma a palavra caso a string termine com 'a'

/\./ -> retoma o ponto literal . - Serve para outros simbolos também, como \-

exemplo: para pegar um e-mail o código RegEx é: ([a-z0-9\.\-\_]{2,})@([a-z]{2,})([\.a-z]{2,})
NÃO PODE HAVER ESPAÇO ENTRE ELES.

*/