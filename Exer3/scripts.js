function simularLancamentos() {
    // Criar um array para armazenar as frequências de cada face do dado
    let frequencias = [0, 0, 0, 0, 0, 0];

    // Realizar 1 milhão de lançamentos aleatórios
    for (let i = 0; i < 1000000; i++) {
        let resultado = Math.floor(Math.random() * 6) + 1;
        frequencias[resultado - 1]++;
    }

    // Exibir os resultados na tabela HTML
    let tabela = document.getElementById("resultados");
    for (var i = 0; i < 6; i++) {
        let face = i + 1;
        let frequencia = frequencias[i];
        let linha = "<tr><td>" + face + "</td><td>" + frequencia + "</td></tr>";
        tabela.innerHTML += linha;
    }
}