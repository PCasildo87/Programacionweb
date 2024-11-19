document.querySelector("#btnchiste").addEventListener("click", () =>{
    querychiste()
})

function querychiste(){
    fetch("http://www.official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((res) => {
        //console.log(res)

        mostrarchistes(res)
    })
}

function mostrarchistes(chiste){
    let codigo =`<span>${chiste.setup}</span>
    <span>${chiste.punchline}</span>
    <hr>
    <span>categoria:${chiste.type}</span>`
    document.querySelector("#chiste").innerHTML = codigo


}
//-------------------------------------------------------

querygatos()

document.querySelector("#btngatos").addEventListener("click", () =>{
    querygatos()
})

function querygatos(){
    fetch("https://catfact.ninja/fact")
    .then((res) =>  res.json())
    .then((res) => {
        console.log(res)

        mostrargatos(res)
    })
}

function mostrargatos(hecho){
    let codigo =`<span>${hecho.fact}</span>`

    
    
    document.querySelector("#gatos").innerHTML = codigo

}



querygatos()

//---------------------------------------------


document.querySelector("#btnperro").addEventListener("click", () =>{
    queryperro()
})

function queryperro(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) =>  res.json())
    .then((res) => {
        //console.log(res)

        mostrarperro(res)
    })
}

function mostrarperro(imagen){
    let codigo =`<img src="${imagen.message}">`
    document.querySelector("#perro").innerHTML = codigo


}
   

queryperro()

//-------------------------------------

document.querySelector("#btnedad").addEventListener("click",() => {
    let nombre = document.querySelector("#nombre").value
    if(nombre ===""){
        window.alert("ingrese un nombrepara calcularla edad")
        return
    }
    queryedad(nombre)
})

function queryedad(nombre){
    fetch(`https://api.agify.io?name=${nombre}&country_id=AR`)
    .then((res) => res.json () )
    .then ((res) => {
        console.log(res)
        mostraredad(res)
    })

}

function mostraredad(edad){
    let codigo =`<span>edad estimada: ${edad.age}</span>`
    document.querySelector("#edad").innerHTML = codigo
}