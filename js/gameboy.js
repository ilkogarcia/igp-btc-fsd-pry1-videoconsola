// Cambia el color del led indicador de bateroia a verde
function gameboyOn() {
    div = document.getElementById('led-ON');
    div.style.background = "#aaff00";
}

// Cambia el color del led indicador de bateroia a rojo
function gameboyOff() {
    div = document.getElementById('led-ON');
    div.style.background = "#ff0000";
}