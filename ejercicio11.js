const textos = document.getElementById("texto");
const numeros = document.getElementById("numero");
function crearTexto() {    
    if (textos.value.trim() == "") {
        window.alert("Debes escribir un texto en este campo");
        textos.focus();
        textos.select();
        return;
    }
    //const numeros = document.getElementById("numero");
    if (isNaN(Number(numeros.value)) || isNaN(parseInt(numeros.value)) || numeros.value == 0) {
        window.alert("Debes escribir un numero en este campo");
        numeros.focus();
        numeros.select();
        return;
    }
    
    const contenedor = document.getElementById("contenedor");
    contenedor.textContent = "";
    for (let i = 1; i < numeros.value; i++) {
        const p = document.createElement("p");
        p.style.display = "block";
        p.style.margin = "5px";
        p.style.color = "white";
        p.style.background = "black"
        p.textContent = textos.value;
        contenedor.appendChild(p);
    }
}
document.getElementById("crear").addEventListener("click", crearTexto)