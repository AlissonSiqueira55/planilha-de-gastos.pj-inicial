function calcularTotal() {
    // Obter os valores inseridos pelos usuários
    let gastosPessoa1 = parseFloat(document.getElementById("pessoa1").value);
    let gastosPessoa2 = parseFloat(document.getElementById("pessoa2").value);

    // Calcular o total de gastos
    let totalGastos = gastosPessoa1 + gastosPessoa2;

    // Exibir o resultado na tela
    document.getElementById("total").value = totalGastos;

    // Adicionar um efeito visual à página
    let body = document.querySelector("body");
    let header = document.querySelector("header");
    let main = document.querySelector("main");
    let footer = document.querySelector("footer");

    body.style.backgroundColor = "#00bfff";
    header.style.backgroundColor = "#4d4dff";
    main.style.backgroundColor = "#f2f2f2";
    footer.style.backgroundColor = "#4d4dff";

    setTimeout(function(){
        body.style.backgroundColor = "#f5f5f5";
        header.style.backgroundColor = "#333";
        main.style.backgroundColor = "#fff";
        footer.style.backgroundColor = "#333";
    }, 3000);
}

function calcularGastosSemana() {
    let segunda1 = parseFloat(document.getElementById("segunda1").value);
    let segunda2 = parseFloat(document.getElementById("segunda2").value);
    document.getElementById("totalSegunda").value = (segunda1 + segunda2).toFixed(2);
  
    let terca1 = parseFloat(document.getElementById("terca1").value);
    let terca2 = parseFloat(document.getElementById("terca2").value);
    document.getElementById("totalTerca").value = (terca1 + terca2).toFixed(2);
  
    let quarta1 = parseFloat(document.getElementById("quarta1").value);
    let quarta2 = parseFloat(document.getElementById("quarta2").value);
    document.getElementById("totalQuarta").value = (quarta1 + quarta2).toFixed(2);
  
    let quinta1 = parseFloat(document.getElementById("quinta1").value);
    let quinta2 = parseFloat(document.getElementById("quinta2").value);
    document.getElementById("totalQuinta").value = (quinta1 + quinta2).toFixed(2);
  
    let sexta1 = parseFloat(document.getElementById("sexta1").value);
    let sexta2 = parseFloat(document.getElementById("sexta2").value);
    document.getElementById("totalSexta").value = (sexta1 + sexta2).toFixed(2);
  
    // Calcula o total semanal
    let totalSemana = segunda1 + segunda2 + terca1 + terca2 + quarta1 + quarta2 + quinta1 + quinta2 + sexta1 + sexta2;
    
    // Exibe o total semanal no campo correspondente
    document.getElementById("totalSemana").value = totalSemana.toFixed(2);
  }