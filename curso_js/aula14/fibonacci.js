
var n1 = 1
var n2 = -1

for (var c = 1; c <=10; c++){
    var fibonacci = n1 + n2
    console.log(`${fibonacci}`)
    n2 = n1
    n1 = fibonacci
}