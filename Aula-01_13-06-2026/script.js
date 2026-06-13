const nomeItem = document.getElementById("nome-item");
const adicionarBtn = document.getElementById("botao-adicionar");
const lista = document.getElementById("lista");

let itens = [];

adicionarBtn.addEventListener("click", adicionarItem);

function adicionarItem() {
    const nome = nomeItem.value;
    
    if (!nome) {
        alert("Digite alguma informação");
        return;
    }

    const data = new Date();

    const novoItem = {
        id: data.now(),
        nome: nome
    };

    itens.push(novoItem)

    renderizarLista();

    nomeItem.value = "";
}

function renderizarLista() {
    for (let item of itens) {
        console.log(item)
    }
    
    lista.innerHTML = ``
}