/**
 *  Simulador dos operadores lógicos AND - OR - NOT 
 *  @author Nathan Freire Furukawa Santos 
 */

let receive // Armazena o parâmetro (valor) recebido do html
// as variaveis abaixo são usadas para identificar se o interruptor está ligado ou desligado
//(false = desligado | true = Ligado)
let sw1 = false
let sw2 = false
// a variavel abaixo é usada para indentificar se a lampada esta quebrada
let sw3 = false

function sw(receive) {
    // console.log(receive) //apoio a lógica

if (receive === 1 && sw1 === false){
    document.getElementById('sw1').src = "img/swon.png"
    sw1 = true} 
else if (receive === 1 && sw1 === true) {
    document.getElementById('sw1').src = "img/swoff.png"
    sw1 = false}

if (receive === 2 && sw2 === false){
    document.getElementById('sw2').src = "img/swon.png"
    sw2 = true} 
else if (receive === 2 && sw2 === true) {
    document.getElementById('sw2').src = "img/swoff.png"
    sw2 = false}
    
if (receive === 3) {
        
    // a linha abaixo cria um objeto usando a classe audio
    let som = new Audio() // new = objeto //
    console.log(typeof(som))
    som.src = "sound/glassbreaking.wav"
    som.play()
    // Trocar a imagem (manipulação do DOM)
    document.getElementById('lamp').src = "img/broken.jpg"
    sw3 = true
}

//lógica para operador AND
if (sw3 !== true) 
    if (sw1 === true && sw2 === true) {
        document.getElementById('lamp').src = "img/on.jpg"
    } else {
        document.getElementById('lamp').src = "img/off.jpg"
    }
}



