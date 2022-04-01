function EscolherPrato(prato) {
    const pratoClicado=document.querySelector("."+ prato);
    const pratoSelecionado=document.querySelector(".pratos").querySelector(".selecionado");
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove('selecionado')
    }
    pratoClicado.classList.add("selecionado")
}


function EscolherBebida(bebida) {
    const bebidaClicado=document.querySelector("."+ bebida);
    const bebidaSelecionado=document.querySelector(".bebidas").querySelector(".selecionado");
    if (bebidaSelecionado !== null) {
        bebidaSelecionado.classList.remove('selecionado')
    }
    bebidaClicado.classList.add("selecionado")
}


function EscolherSobremesa(sobremesa) {
    const sobremesaClicado=document.querySelector("."+ sobremesa);
    const sobremesaSelecionado=document.querySelector(".sobremesas").querySelector(".selecionado");
    if (sobremesaSelecionado !== null) {
        sobremesaSelecionado.classList.remove('selecionado')
    }
    sobremesaClicado.classList.add("selecionado")
}

