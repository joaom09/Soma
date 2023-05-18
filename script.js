function calcular() {

    var num1 = parseFloat(document.getElementById("caixa1").value);
    var num2 = parseFloat(document.getElementById("caixa2").value);


    var resultado = num1 + num2; 

    document.getElementById("caixaResultado").value = resultado;
}
