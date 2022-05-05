console.log("Heloo World! no console")

const funcaoParaConsole = () => {
    console.log("Esse texto foi chamado pela função!")
}

funcaoParaConsole()

const funcaoDeAlerta = () => {
    alert(("Esse texto foi chamado pela função ALERTA!")) 
}

// const alterarParagrafo = () => {
//     //acessar o DOM - Document Object Model
//     // mapas - objetos
//     let paragrafo = document.getElementById("paragrafo1").innerText
//     console.log(paragrafo)
// }

const alterarParagrafo = () => {
    //acessar o DOM - Document Object Model
    // mapas - objetos
    document.getElementById("paragrafo1").innerText = "Isso foi alterado!"
    
}