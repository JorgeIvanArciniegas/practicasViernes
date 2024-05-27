
function cambiarOpacidad1(){
   const imagen1 = document.getElementById("imagen1");        
   imagen1.style.opacity = "1";
   imagen1.style.border = "solid";
   info.textContent = "Carrera";

}
function cambiarOpacidad2(){
    const imagen2 = document.getElementById("imagen2");    
    imagen2.style.opacity = "1";
    imagen2.style.background = "blue";
    info.textContent = "Natacion";
}
function cambiarOpacidad3(){
    const imagen3 = document.getElementById("imagen3");    
    imagen3.style.opacity = "1";
    imagen3.style.background = "green";
    info.textContent = "Pertiga";
}


document.getElementById("imagen1").addEventListener("mousemove", cambiarOpacidad1);
document.getElementById("imagen2").addEventListener("mouseover", cambiarOpacidad2);
document.getElementById("imagen3").addEventListener("mouseover", cambiarOpacidad3);