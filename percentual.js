const faturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

const totalFaturamento = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

const percentuais = {};
for (const estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / totalFaturamento) * 100;
}

for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}