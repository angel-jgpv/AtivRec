
function obterImc(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = peso/(altura*altura);
    return imc;
}
function preencherImc(){
    const imc = obterImc();
    let cla = "";
    if(imc<18.5)
        cla="abaixo do peso";
        else if(imc<=24.9)
            cla="com peso normal";
        else if(imc<=29.9)
             cla="levemente acima do peso";
        else if(imc<=34.9)
            cla="Obesidade grau I";
        else if(imc<=39.9)
            cla="Obesidade grau II (severa)";
        else 
            cla="Obesidade grau III (mórbida)";
        document.getElementById("resultado").innerHTML = "IMC = " + imc.toFixed(2) + " - " + cla;
}
