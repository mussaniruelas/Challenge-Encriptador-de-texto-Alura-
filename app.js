// Funcion para encriptar texto
function encriptar(cadena) {
    let textEncriptado = cadena.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');


    return textEncriptado;
}

// Funcion para desencriptar texto
function desencriptar(cadena) {
    let textDesencriptado = cadena.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textDesencriptado;
}

// para eliminar contenido (imagen, span, p)
function elimina_contenido() {
    // se verifica y se elimina
    const img = document.getElementById('resultado-img');
    const span = document.getElementById('resultado-span');
    const p = document.getElementById('resultado-p');

    if (img) img.remove();
    if (span) span.remove();
    if (p) p.remove();
}

// Evento del boton para encriptar texto
const btnEncriptar = document.getElementById('btn-encriptar');
btnEncriptar.addEventListener('click', () => {
    const inputText = document.getElementById('text-ingreso').value;

    if (/^[a-z\s]+$/.test(inputText)) {
        const resultadoDiv = document.getElementById('divResultadoText');

        // se encripta el texto
        const encrytedText = encriptar(inputText);

        // se elmimina el contenido anterior
        elimina_contenido();

        // se inserta nuevo texto
        resultadoDiv.textContent = encrytedText;

        // hacer visible el boton de copiar
        cambiar_estilos();

    } else {
        alert('El texto ingresado no es valido, solo se permiten letras minusculas y sin carecteres especiales');
    }


});

// Evento del boton para desencriptar texto
const btnDesencriptar = document.getElementById('btn-desencriptar');
btnDesencriptar.addEventListener('click', () => {
    const inputText = document.getElementById('text-ingreso').value;

    if (/^[a-z\s]+$/.test(inputText)) {
        const resultadoDiv = document.getElementById('divResultadoText');

        // se encripta el texto
        const desencrytedText = desencriptar(inputText);

        // se elmimina el contenido anterior
        elimina_contenido();

        // se inserta nuevo texto
        resultadoDiv.textContent = desencrytedText;

        // hacer visible el boton de copiar
        cambiar_estilos();

    } else {
        alert('El texto ingresado no es valido, solo se permiten letras minusculas y sin carecteres especiales');
    }

});

// Evento para copiar el texto en el portapapeles :3
document.getElementById('btn-copiar').addEventListener('click', function () {
    var textoParaCopiar = document.getElementById('divResultadoText').innerText;
    navigator.clipboard.writeText(textoParaCopiar).then(function () {
        console.log('Texto copiado al portapapeles');
    }).catch(function (error) {
        console.error('Error al copiar el texto: ', error);
    });
});

function cambiar_estilos(){
    const resultContenider = document.getElementById('divResult');
    resultContenider.classList.add('resulta-container--des');

    const resultText = document.getElementById('divResultadoText');
    resultText.classList.add('result--des');

    const resultBtn = document.getElementById('btn-copiar');
    resultBtn.classList.add('button-result__button--des');
}