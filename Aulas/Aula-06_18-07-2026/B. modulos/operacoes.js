/* Operações Simples */

// Podem haver exportações nomeadas (como esta) o quanto quiser por arquivo.
export function somaSimples(n1, n2) {
    return n1 + n2;
}

export function subtracaoSimples(n1, n2) {
    return n1 - n2;
}

export function multiplicacaoSimples(n1, n2) {
    return n1 * n2;
}

export function divisaoSimples(n1, n2) {
    return n1 / n2;
}

// Criando um objeto que será o importado por padrão.
const operacoes = {
    somaSimples: somaSimples,
    subtracaoSimples: subtracaoSimples,
    multiplicacaoSimples: multiplicacaoSimples,
    divisaoSimples: divisaoSimples
};

// Só pode haver uma exportação padrão por arquivo.
export default operacoes;