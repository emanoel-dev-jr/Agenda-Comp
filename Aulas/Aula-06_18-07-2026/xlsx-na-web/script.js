// import XLSX from "xlsx";

const inputArquivo = document.getElementById("input-arquivo");

inputArquivo.addEventListener("change", renderizarTabela);

function renderizarTabela(event) {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    const leitor = new FileReader();

    // Método disparado quando o arquivo acabar de ser lido
    leitor.onload = (e) => {
        // Convertendo os dados brutos lidos pelo leitor (zeros e uns) em um formato compreendido pelo JavaScript

        //
        // U -> Unsigned
        // int -> Integer
        // 8 -> 8 bits
        // Array -> Array padrão
        //
        const dadosBrutos = new Uint8Array(e.target.result);

        // Lendo o arquivo (os dados brutos adquiridos)
        // |
        // |------------------------------------- configuração -
        // |-------------------- código binário-----------------
        const arquivo = XLSX.read(dadosBrutos, { type: "array" });
    
        const nomePlanilha1 = arquivo.SheetNames[0];
        const planilha1 = arquivo.Sheets[nomePlanilha1];

        // Convertendo a planilha para o formato HTML (gera tabela automaticamente)
        const tabelaHTML = XLSX.utils.sheet_to_html(planilha1);
        console.log(planilha1)

        document.getElementById("conteiner-tabela").innerHTML += tabelaHTML;
    }
    
    leitor.readAsArrayBuffer(arquivo);
}