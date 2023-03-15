// Como funciona o arrow function!

const sum = (number1, number2) => { //a const vai receber uma arrow function
    return number1 + number2
}

    console.log(sum(40,20))


//sem retorn mas retorna
const soma = (number1, number2) => number1 + number2

    console.log(soma(5,10))


//sem parâmetros
const community = () => 'CollabCode' //pode utilizar {} e return

    console.log(community())


//somente um parâmetro
const double = (number) => number * 2 //pode ignorar os parênteses

    console.log(double(8))


//parâmetros multiplos
    const somando = (number1, number2, number3 ) => number1 + number2 + number3;
    
    console.log(somando(10,20,15))


//Arrow function com chaves
//é utilizando chaves quando há uma lógica antes do return

    const yearsOld = (year) => {
        if (year >= 18){
            return "Maior idade!"
        } else{
            return "Menor idade!"
        }
    }

    console.log(yearsOld(17))


//returnando um JSON
    const getPerson = () => ({nome: "Carlos"});

    console.log(getPerson())


//IIFE com arrow function
//Essa função se autocria e autoexecuta. Além de que é possível utilizar arrow function com o mesmo nome em mais de um arquivo .js

    (/*Function*/() => { //abrir a função com parenteses
        const Person = () => ({nome: "Maria", eye: "green"})
        
        console.log (Person())
    })() //fecha parenteses. Essa função se altocria e se altoexecuta.

