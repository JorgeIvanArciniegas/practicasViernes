function cambiarPadding1() {    
    document.getElementById("texto").style.padding = "0" + "px";
   
}
function cambiarPadding2() {   
    document.getElementById("texto").style.padding = "5" + "px";
    
}
function cambiarPadding3() {   
   document.getElementById("texto").style.padding = "10" + "px";   
}

/*function cambiarPadding(evt) {  
    const espaciado = getElementById("espaciado");
    const texto = document.getElementById("texto");
    texto = evt.currentTarget.dataset.div;
} */   

document.getElementById('espaciado1').addEventListener("click", cambiarPadding1);
document.getElementById('espaciado2').addEventListener("click", cambiarPadding2);
document.getElementById('espaciado3').addEventListener("click", cambiarPadding3);

