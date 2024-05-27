
function comprobar() {
    const edad = document.getElementById("edad");
    const resultado = document.getElementById("resultado");

    if (isNaN(Number(edad.value)) || isNaN(parseInt(edad.value)) || Number(edad.value <= 0)) {
        window.alert("Debes escribir una edad valida");
        edad.focus();
        edad.select();
        return;
    }
    if (edad.value >= 18) {  
        resultado.value = edad.value;     
        window.alert("Puedes continuar");        
        edad.focus();
        edad.select();
        edad.value="";
    } else {
        window.alert("Eres menor de edad, acceso restringido");
        resultado.value = edad.value;
        edad.focus();
        edad.select();
        edad.value="";
    }
}

document.getElementById("comprobar").addEventListener("click", comprobar);