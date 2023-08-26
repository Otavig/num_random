function sorteador(num_maximo, num_minimo){
    num_maximo = Math.ceil(num_maximo);
    num_minimo = Math.floor(num_minimo);
    return Math.floor(Math.random() * (num_maximo - num_minimo) + num_minimo);
}

function btn_sortear(){
    let min = document.getElementById("info_min").value
    let max = document.getElementById("info_max").value
    let saida_resultado = document.getElementById("resultado");
    let numeroSorteado = sorteador(max, min);

    saida_resultado.innerHTML = ""
    saida_resultado.textContent = `Número sorteado: ${numeroSorteado}`;

    document.getElementById("info_min").value = "";
    document.getElementById("info_max").value = "";
}

function btn_limpar(){
    let saida_resultado = document.getElementById("resultado");
    saida_resultado.innerHTML = ""

    document.getElementById("info_min").value = "";
    document.getElementById("info_max").value = "";
}