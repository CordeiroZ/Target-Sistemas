const fs = require('fs');

// Ler os dados do arquivo 'faturamento.json'
fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) throw err;

    const faturamentoDiario = JSON.parse(data);
    
    // Filtrar dias com faturamento
    const faturamentoValido = faturamentoDiario.filter(valor => valor > 0);
    const menorFaturamento = Math.min(...faturamentoValido);
    const maiorFaturamento = Math.max(...faturamentoValido);
    const mediaFaturamento = faturamentoValido.reduce((acc, val) => acc + val, 0) / faturamentoValido.length;
    
    // Calcular dias acima da média
    const diasAcimaMedia = faturamentoValido.filter(valor => valor > mediaFaturamento).length;

    console.log(`Menor faturamento: R$${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento: R$${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias acima da média: ${diasAcimaMedia}`);
});