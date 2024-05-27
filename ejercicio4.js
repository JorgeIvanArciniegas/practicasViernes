
/*function cambiarOpacidad1(){
    const imagen1 = document.getElementById("imagen1");    
   imagen1.style.opacity = "1";
   imagen1.style.border = "solid";
}
function cambiarOpacidad2(){
    document.getElementById("imagen2").style.opacity = "1";    
    
}
function cambiarOpacidad3(){
    document.getElementById("imagen3"). style.opacity = "1";  
}*/

function cambiarOpacidad(evt) {
    const img = document.getElementsByName("imagenes");
    for (let i = 0; i < 3; i++) { 
        evt.currentTarget.style.opacity = "1";
        evt.currentTarget.style.background = "red";
    }
}


document.getElementById("imagenes").addEventListener("mousemove", cambiarOpacidad);
/*document.getElementById("imagen2").addEventListener("mousemove", cambiarOpacidad2);
document.getElementById("imagen3").addEventListener("mousemove", cambiarOpacidad3);*/