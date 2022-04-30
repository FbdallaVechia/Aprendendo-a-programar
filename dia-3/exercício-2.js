let produtoA = {
    "nome": "camiseta", "valor": 100.00, "internacional": true
};
let produtoB = {
    "nome": "perfume", "valor": 200.00, "internacional": true
};
let produtoC = {
    "nome": "sandália", "valor": 120.00, "internacional": false
};


console.log(produtoA.nome, "custa sem imposto", produtoA.valor)
if(produtoA['internacional'] == true){
    console.log(produtoA.nome, "é internacional e seu novo valor será:")
    console.log(produtoA['valor'] * 1.2)
} else{
    console.log(produtoA.nome, "é nacional e seu novo valor será: ")
    console.log(produtoA['valor'] * 1.12)
}

console.log(produtoB.nome, "custa sem imposto", produtoB.valor)
if( produtoB['internacional'] == true){
    console.log(produtoB.nome, "é internacional e seu novo valor será:")
    console.log(produtoB['valor'] * 1.2) 
}else{
    console.log(produtoB.nome, "é nacional e seu novo valor será: ")
    console.log(produtoB.valor * 1.12)
}

console.log(produtoC.nome, "custa sem imposto", produtoC.valor)
if( produtoC['internacional'] == true){
    console.log(produtoC.nome, "é internacional e seu novo valor será:")
    console.log(produtoC['valor'] * 1.2) 
}else{
    console.log(produtoC.nome, "é nacional e seu novo valor será: ")
    console.log(produtoC.valor * 1.12)
}
