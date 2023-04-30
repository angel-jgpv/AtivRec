function calculaLitro(){
    let dinheiro = parseFloat(document.getElementById("dinheiro").value);
    let preco = 7.0;
    let litros = dinheiro / preco;
    let km = litros * 20.0;
    document.getElementById("resultado").innerHTML = "Com R$ " + dinheiro.toFixed(2) + " você pode comprar " + litros.toFixed(2) + " litros de combustível e percorrer " + km.toFixed(2) + " km.";
}