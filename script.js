//Challenge Alura Latam - Oracle Next Education - G5 -Encriptador de texto.
//anamariaperezzeledon@gmail.com
//https://github.com/anazeledon/
//https://www.linkedin.com/in/anamariaperezzeledon/
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje-encriptado");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroungImage = "none"
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(mensaje.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroungImage = "none"
}

function copiar(){
        // Seleccionar el input de texto y el wrapper
        var input = document.getElementById("texto"),
            wrapper = document.getElementById('wrapper');
        // Limpiar cualquiera que sea el valor anterior del wrapper
        wrapper.innerHTML = '';
        wrapper.classList = 'hidden';
    
        if (input.value.length < 1) {
            wrapper.innerHTML = 'Ingresa un valor válido para copiar.';
            wrapper.classList = 'danger display';
            return;
        }
    
        // Seleccionamos el input sin necesidad de hacer contacto
        input.select();
        input.setSelectionRange(0, 99999);
    
        // Usamos el navigator para acceder al clipboard y escribir el valor del input en él
        navigator.clipboard.writeText(input.value);
    
        // Informamos que hemos copiado el texto
        wrapper.innerHTML = '<b>Texto copiado:</b> ' + input.value;
        wrapper.classList = 'display success';
    }

    document.getElementById("botoncopiar").addEventListener("click", copiar);

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada

    for(let i = 0; i < matrizCodigo.length; i++) {

        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada

    for(let i = 0; i < matrizCodigo.length; i++) {

        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencriptada
}
