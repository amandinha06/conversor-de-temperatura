function converter() {
    const temperaturaInput = document.getElementById('temperatura');
    const unidadeSelect = document.getElementById('unidade');
    const resultadoP = document.getElementById('resultado');
    const temperatura = parseFloat(temperaturaInput.value);
    const unidade = unidadeSelect.value;

    let resultado;
    if (unidade === 'celsius') {
        resultado = (temperatura * 9/5) + 32;
        resultadoP.textContent = `${temperatura}°C equivale a ${resultado.toFixed(2)}°F`;
    } else {
        resultado = (temperatura - 32) * 5/9;
        resultadoP.textContent = `${temperatura}°F equivale a ${resultado.toFixed(2)}°C`;
    }
}

function resetar() {
    document.getElementById('temperatura').value = '';
    document.getElementById('resultado').textContent = '';
}