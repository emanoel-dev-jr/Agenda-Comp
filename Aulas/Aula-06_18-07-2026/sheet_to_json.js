import XLSX from "xlsx";

// Armazenando um "livro" (arquivo) já existente
const workbook = XLSX.readFile("./lista_usuarios.xlsx");

// Armazenando a página Usuários
const abaUsuarios = workbook.Sheets["Usuários"];

// Convertendo a página armazenada para um objeto JSON
const abaUsuariosJSON = XLSX.utils.sheet_to_json(abaUsuarios);

// Imprimindo a lista de nomes das páginas
console.log("\nPáginas:", workbook.SheetNames);

console.log("==================================================")

// Imprimindo a abas/página Usuários
console.log("\nPágina Usuário:\n\n", abaUsuarios);

console.log("==================================================")

// Imprimindo a abas/página Usuários em formato JSON
console.log("\nJSON criado da Página Usuário: \n\n", abaUsuariosJSON);