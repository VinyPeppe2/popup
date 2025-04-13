const saudar = document.getElementById('bSaudar');
const abrirpopup = document.getElementsByClassName('groupPopup')[0];
const fecharPopup = document.getElementsByClassName('fecharPopup')[0];

saudar.addEventListener("click", () =>{
    abrirpopup.classList.add("ativo");
})

fecharPopup.addEventListener("click", () =>{
    abrirpopup.classList.remove("ativo");
})

window.addEventListener("click", (event)=>{
    if (event.target === abrirpopup){
        abrirpopup.classList.remove("ativo");
    }
})

