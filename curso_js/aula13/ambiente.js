var c = 1

while ( c <=  6){ //estrutura de repetição com teste lógico no inicio
    console.log(`Passo ${c}`)
    c++ //c = c + 1 
}

if(c == 7){ //Depois do while o contador(c) vai ser 7 no final pois quando ele chegar a 6 ele vai receber o c++
     c = 1
}

do{ 
    console.log(`Teste logico no final. Passo ${c}`)
    c++
} while (c <= 6) //estrutura de repetição com teste lógico no final


