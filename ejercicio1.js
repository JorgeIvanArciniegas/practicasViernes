
function comprobar() {
    const edad = document.getElementById("edad");

    if (isNaN(Number(edad.value)) || isNaN(parseInt(edad.value))) {
        window.alert("Debes escribir una edad valida");
        edad.focus();
        edad.select();
        return;
    }
    if (edad.value >= 18) {
        window.alert("Puedes continuar");
        edad.focus();
        edad.select();
    } else {
        window.alert("Eres menor de edad, acceso restringido");
        edad.focus();
        edad.select();
    }
}

document.getElementById("comprobar").addEventListener("click", comprobar);