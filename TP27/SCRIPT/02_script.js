document.querySelectorAll(".btn").forEach((btn) =>{
btn.addEventListener("click",(e)=>{
    //console.log(e.target.dataset.texto)
    mostrartexto(e.target.dataset.texto)
})

})
function mostrartexto(num){
    fetch (`./DATA/texto${num}.txt`)
    .then((res) => res.text())
    .then((res)=> document.querySelector("main").innerHTML = res)

}

mostrartexto(1)