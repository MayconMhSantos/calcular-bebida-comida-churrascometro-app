// Calcular quantidade de bebida e comida para a festa
// E calcular tudo isso baseado na quantidade de horas de festa
// Carne 400gr de carne
// 1200lt bebidas por pessoa

let inputAdultos = document.getElementById("adulto");
let inputCriancas = document.getElementById("crianca");
let inputHoras = document.getElementById("hora");

let carneH = document.getElementById("carneH")
let cervejaH = document.getElementById("cervejaH")
let refrigeranteH = document.getElementById("refrigeranteH")

function calcular() {

    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputHoras.value;
    
    
    let qntdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qntdTotalcerveja = cervejaPP(duracao) * adultos;
    let qntdTotalbebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    if(inputAdultos.value === "" && inputCriancas.value === "" && inputHoras.value === "")  {
        alert("Preencha todos os dados!.")
    }else{
        carneH.innerHTML = `${qntdTotalCarne/1000} KG de Carne.`;
        cervejaH.innerHTML = `${qntdTotalcerveja/1000} Litros de Cerveja.`;
        refrigeranteH.innerHTML = `${qntdTotalbebida/1000} Litros de Refrigerante.`;
    }
}

function limpar() {
   inputAdultos.value = "";
   inputCriancas.value = "";
   inputHoras.value = "";
   carneH.innerHTML = "";
   cervejaH.innerHTML = "";
   refrigeranteH.innerHTML = "";
}



function carnePP(duracao){
    if(duracao >= 6){
        return 750;
    } else {
        return 500;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}