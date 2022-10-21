// 0. Iniciar el juego
alert ('Incia el juego')
alert ('Elige tu ataque!')

// 1. Elegir ataque de los jugadores 
let player = prompt ('Elige 0 para piedra, 1 para papel y 2 para tijera')
if (player == 0) {
    alert ('Elegiste piedra')
} else if (player == 1) {
    alert ('Elegiste papel')
} else if (player == 2) {
    alert ('Elegiste tijera')
}

// 2. Elegir ataque ALEATORIO de los enemigos
let enemy = Math.round(Math.random () * 2)

if (enemy == 0) {
    alert ('El enemigo eligio piedra')
} else if (enemy == 1) {
    alert ('El enemigo eligio papel')
} else if (enemy == 2) {
    alert ('El enemigo eligio tijera')
}
// 3. Mostrar el resultado
if (player == enemy) {
    alert ('Empate')
} else if (player == 0 && enemy == 2) {
    alert ('Ganaste la partida')
} else if (player == 1 && enemy == 0) {
    alert ('Ganaste la partida')
} else if (player == 2 && enemy == 1) {
    alert ('Ganaste la partida')
} else {
    alert ('Perdiste la partida')
}