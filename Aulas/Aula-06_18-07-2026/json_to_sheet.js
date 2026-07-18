import XSLX from "xlsx";

const dados = [
    {idade: 16, email: "emanoel@email.com", nome: "Emanoel Brian Maffei"},
    {nome: "Felipe Fonseca Santos", email: "felipe@email.com", idade: 17},
    {nome: "Henrique Goncalves de Paiva", email: "paiva@email.com", idade: 16},
];

// Criando uma tabela (uma aba da planilha)
const worksheet = XSLX.utils.json_to_sheet(dados);

// Criando um novo arquivo ("um livro", por conter diversas páginas)
const workbook = XSLX.utils.book_new();

// Adicionando uma aba/página (contém a tabela) ao arquivo de planilha
XSLX.utils.book_append_sheet(workbook, worksheet, "Usuários");

// Salvando no disco do computador ou solicitando para321 baixar caso no navegador
XSLX.writeFile(workbook, "lista_usuarios.xlsx");