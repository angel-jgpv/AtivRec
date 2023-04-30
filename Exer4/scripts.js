function inverterNomes() {
    let nomes = document.getElementById("nomes").value.split(",");
    let nomesInvertidos = "";
    for (let i = 0; i < nomes.length; i++) {
        let nomeInvertido = "";
        for (let j = nomes[i].length - 1; j >= 0; j--) {
            nomeInvertido += nomes[i][j];
        }
        nomesInvertidos += nomeInvertido + ", ";
    }
    nomesInvertidos = nomesInvertidos.substring(0, nomesInvertidos.length - 2);
    document.getElementById("nomesInvertidos").innerHTML = nomesInvertidos;
}