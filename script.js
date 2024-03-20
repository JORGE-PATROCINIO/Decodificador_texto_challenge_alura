var text = document.querySelector(".container__app__input__text");
var newText = document.querySelector(".container__app__cripto__text");
var btnCopy = document.querySelector(".container__app__cripto_btn-copy");

function Criptografar() {

    //Validação para entrada de letras minusculas !
    var validation = text.value;
    if (/[^a-z, ]/.test(validation)) {
        alert("OPS, Somente letras minusculas !")
    }else{
        newText.textContent = text.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "obter")
        .replace(/u/g, "ufat");
    }
    
}

function Descriptografar() {
  newText.textContent = text.value
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/obter/g, "o")
    .replace(/ufat/g, "u");
}

// Evento para copiar texto no click, com trativa de erro !
btnCopy.addEventListener("click", function () {
    const textCriptografado = newText.textContent;
    navigator.clipboard.writeText(textCriptografado)
        .then(function () {
            alert("Texto criptografado copiado com sucesso!");
        })
        .catch(function (err) {
            console.error('Erro ao copiar texto criptografado: ', err);
        });

        btnCopy.textContent = "COPIADO!";
        setTimeout(function () {
            btnCopy.textContent = "COPIAR";
        }, 2500);

        // apagar área de entrada de texto p/ inserir o texto copiado!
        text.value = " ";
});

