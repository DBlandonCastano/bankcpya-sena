document.getElementById('tiempo').addEventListener('change', actualizarTasa);

function actualizarTasa() {
    const tiempo = parseInt(document.getElementById('tiempo').value);
    let tasa;

    if (tiempo === 60) {
        tasa = 13;
    } else if (tiempo === 90) {
        tasa = 12.40;
    } else if (tiempo === 120) {
        tasa = 12.18;
    } else if (tiempo === 180) {
        tasa = 12;
    } else if (tiempo === 360) {
        tasa = 11.70;
    } else if (tiempo === 540) {
        tasa = 10.05;
    }

    document.getElementById('tasa').value = tasa;
}

function calcularCDT() {
    const monto = parseFloat(document.getElementById('monto').value);
    const tasa = parseFloat(document.getElementById('tasa').value) / 100;
    const tiempo = parseInt(document.getElementById('tiempo').value);

    const interes = monto * tasa * (tiempo / 360);
    const total = monto + interes;

    const totalFormateado = formatNumber(total);
    const interesFormateado = formatNumber(interes);

    document.getElementById('resultText').textContent = `Monto Total: $${totalFormateado} (Intereses: $${interesFormateado})`;
}

function formatNumber(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}