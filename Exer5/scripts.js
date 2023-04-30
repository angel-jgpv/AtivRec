function verificarPalindromo() {
    let palavra = document.getElementById("palavra").value.toLowerCase();
    let inverso = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        inverso += palavra[i];
    }
    if (palavra === inverso) {
        document.getElementById("resultado").innerHTML = "A palavra \"" + palavra + "\" é um palíndromo.";
    } else {
        document.getElementById("resultado").innerHTML = "A palavra \"" + palavra + "\" não é um palíndromo.";
    }
}