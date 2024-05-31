
function porClase() {
    const colorClase = document.querySelectorAll("div p");
    for (const clase of colorClase) {
        clase.style.color = "green";
    }
}
function porEtiqueta() {
    const colorEtiqueta = document.querySelectorAll("div p");
    for (const etiqueta of colorEtiqueta) {
        etiqueta.style.color = "blue";
    }
}
function porAtributo() {
    const colorAtributo = document.querySelectorAll("div p");
    for (const atributo of colorAtributo) {
        atributo.style.color = "red";
    }
}

document.getElementById("porClase").addEventListener("click", porClase)
document.getElementById("porEtiqueta").addEventListener("click", porEtiqueta)
document.getElementById("porAtributo").addEventListener("click", porAtributo)
