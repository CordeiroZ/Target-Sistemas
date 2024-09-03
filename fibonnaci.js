function fibonacci(n) {
    let fib = [0, 1];
    while (fib[fib.length - 1] < n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}

// Solicitar um número ao usuário
const numero = parseInt(prompt("Informe um número: "), 10);
const sequenciaFib = fibonacci(numero);

if (sequenciaFib.includes(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}