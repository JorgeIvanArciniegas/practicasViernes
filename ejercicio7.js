function sonidoPerro() {   
    const audio = new Audio('perro.wav'); 
    audio.play();    
}
function sonidoGato() { 
    const audio = new Audio('gato.wav'); 
    audio.play();   
}
function sonidoMono() {
    const audio = new Audio('mono.wav'); 
    audio.play();   
}
document.getElementById("perro").addEventListener("click", sonidoPerro);
document.getElementById("gato").addEventListener("click", sonidoGato);
document.getElementById("mono").addEventListener("click", sonidoMono);