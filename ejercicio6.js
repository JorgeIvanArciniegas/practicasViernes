
function sinSeleccionarImagen() {   
    const imagen = document.getElementById('imagen');
    imagen.src = "olimpia.png";
}
function seleccionarCarrera() {    
    const imagen = document.getElementById('imagen');
    imagen.src = "carrera.png";
}
function seleccionarNatacion() {
    const natacion = document.getElementById('natacion');
    const imagen = document.getElementById('imagen');
    imagen.src = "natacion.png"
}
function seleccionarAtletismo() {
    const pertiga = document.getElementById('atletismo');
    const imagen = document.getElementById('imagen');
    imagen.src = "pertiga.png"
}

    


document.getElementById('seleccionar').addEventListener("click", sinSeleccionarImagen);
document.getElementById('carrera').addEventListener("click", seleccionarCarrera);
document.getElementById('natacion').addEventListener("click", seleccionarNatacion);
document.getElementById('atletismo').addEventListener("click", seleccionarAtletismo);
