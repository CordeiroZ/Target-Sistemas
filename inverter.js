function inverterString(s) {
    let stringInvertida = '';
    for (let i = 0; i < s.length; i++) {
        stringInvertida = s[i] + stringInvertida;
    }
    return stringInvertida;
}

// Solicitar uma string ao usuário
const entrada = prompt("Informe uma string: ");
const resultado = inverterString(entrada);

console.log(`String invertida: ${resultado}`);