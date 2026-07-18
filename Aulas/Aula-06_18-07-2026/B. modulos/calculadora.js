// Importando objetos, funções ou variáveis de forma individual (graças a exportação nomeada).
import { somaSimples, subtracaoSimples, multiplicacaoSimples, divisaoSimples } from "./operacoes.js";
// Importando uma função, objeto ou variável padrão, o objeto operações (graças a exportação padrão).
import objeto from "./operacoes.js";

console.log("Soma Simples ( 5, 10 ) ->", somaSimples(5, 10));
console.log("Subtracao Simples ( 5, 10 ) ->", subtracaoSimples(5, 10));
console.log("Multiplicacao Simples ( 5, 10 ) ->", multiplicacaoSimples(5, 10));
console.log("Divisao Simples ( 5, 10 ) ->", divisaoSimples(5, 10));

console.log(objeto)