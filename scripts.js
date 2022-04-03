let pratoEscolhido;
let bebidaEscolhida;
let sobremesaEscolhida;


function EscolherPrato(prato) {
    const pratoClicado=document.querySelector("."+ prato);
    const pratoSelecionado=document.querySelector(".pratos").querySelector(".selecionado");
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove('selecionado')
    }
    pratoClicado.classList.add("selecionado")
    pratoEscolhido=prato
    FinalizarPed();
}


function EscolherBebida(bebida) {
    const bebidaClicado=document.querySelector("."+ bebida);
    const bebidaSelecionado=document.querySelector(".bebidas").querySelector(".selecionado");
    if (bebidaSelecionado !== null) {
        bebidaSelecionado.classList.remove('selecionado')
    }
    bebidaClicado.classList.add("selecionado")
    bebidaEscolhida=bebida
    FinalizarPed();
}


function EscolherSobremesa(sobremesa) {
    const sobremesaClicado=document.querySelector("."+ sobremesa);
    const sobremesaSelecionado=document.querySelector(".sobremesas").querySelector(".selecionado");
    if (sobremesaSelecionado !== null) {
        sobremesaSelecionado.classList.remove('selecionado')
    }
    sobremesaClicado.classList.add("selecionado")
    sobremesaEscolhida=sobremesa
    FinalizarPed();
}


function FinalizarPed () {
    if (pratoEscolhido !== undefined && bebidaEscolhida !==undefined && sobremesaEscolhida !==undefined) {
        document.querySelector(".botão").classList.add('finalizarpedido')
        document.querySelector(".botão").innerHTML = "Finalizar Pedido"   
    }

}

function ClicarFinalizar () {
    finalizar=document.querySelector(".botão").classList.contains("finalizarpedido")
    prato=document.querySelector("."+pratoEscolhido).querySelector(".Nome").innerHTML;
    bebida=document.querySelector("."+bebidaEscolhida).querySelector(".Nome").innerHTML;
    sobremesa=document.querySelector("."+sobremesaEscolhida).querySelector(".Nome").innerHTML;
    precoPrato=document.querySelector("."+pratoEscolhido).querySelector(".preco").innerHTML;
    precoBebida=document.querySelector("."+bebidaEscolhida).querySelector(".preco").innerHTML;
    precoSobremesa=document.querySelector("."+sobremesaEscolhida).querySelector(".preco").innerHTML;
    cliente=prompt("Qual seu nome?");
    Endereço=prompt("Qual seu endereço?");
    nomeCliente= "Nome: " +cliente
    End= "Endereço: " +Endereço
    let mensagem = "Olá, gostaria de fazer o pedido: \n" +prato+": " +precoPrato+ "\n" +bebida+": " +precoBebida+ "\n" +sobremesa+": " +precoSobremesa+ "\n" +nomeCliente+ "\n"+End;
    alert (mensagem)
    if (finalizar == true) {
         window.open("https://wa.me/5521999999999?text="+mensagem);
    
    }
    
}
