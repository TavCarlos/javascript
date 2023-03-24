//Javascript Object Notation; -> Uma forma de escrever javascript que pode ser interpretada por outras linguagens e é transportada via texto.

const objs = [ //aqui é um objeto em javascript, 'teste.json' para comprar 
    {
        nome: "Matheus",
        idade: 30,
        esta_trabalhando: true,
        hobbies: ["programar", "correr", "ler"]   
    },
    {
        nome: "David",
        idade: 18,
        esta_trabalhando: false,
        hobbies: ["jogar", "estudar", "malhar"]
    }
]


//Converter objeto para JSON para passar para API
const jsonData = JSON.stringify(objs)
console.log(jsonData)
//converter um JSON que veio da API para Objeto
const objData = JSON.parse(jsonData);
console.log(objData)
