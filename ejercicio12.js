let valor = 0;
function incrementarValor() {
    valor++;
    document.getElementById("cuenta").textContent = valor;
}
function decrementarValor() {
    if (cuenta.textContent > 0) {
        valor--;
        const cuenta = document.getElementById("cuenta").textContent = valor;
    }
}

document.getElementById("incrementar").addEventListener("click", incrementarValor)
document.getElementById("decrementar").addEventListener("click", decrementarValor)