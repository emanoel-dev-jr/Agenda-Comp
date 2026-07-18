import XLSX from "xlsx";

// Armazenando um "livro" (arquivo) já existente em uma variável
const workbook = XLSX.readFile("./lista_usuarios.xlsx");

// Acessando e imprimindo a lista de nomes das páginas
console.log(workbook.SheetNames)