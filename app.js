let Quantidade;
let numeroInicial;
let numeroFinal;
const texto = document.getElementById("resultado");
let resultados=[];

function Aleatorio()
{
    document.getElementById("btn-reiniciar").classList.remove("container__botao-desabilitado");
    document.getElementById("btn-reiniciar").classList.add("container__botao");
    for(let i=0;i<Quantidade;i++)
    {
      
        let escolha=parseInt(Math.random()*(numeroFinal-numeroInicial+1)+numeroInicial);
        console.log(`numero sorteado:${escolha}`);
        resultados.push(escolha);
    }
    texto.textContent = `Números sorteados: ${resultados.join(',')}`
    texto.style.fontSize=35+"px";
    resultados=[];
}


function sortear()
{  
    Quantidade=parseInt(document.getElementById("quantidade").value);
    numeroInicial=parseInt(document.getElementById("de").value);
    numeroFinal=parseInt(document.getElementById("ate").value);
    Aleatorio() 
}

function reiniciar()
{
    texto.textContent = "Números sorteados:  nenhum até agora";
    document.getElementById("btn-reiniciar").classList.add("container__botao-desabilitado");
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";


}