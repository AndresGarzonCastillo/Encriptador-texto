document.getElementById('btn-encriptar').addEventListener('click', function () {
  const texto = document.getElementById('ingrese-texto').value;

  if (/[^a-z\s]/.test(texto)) {
    alert('Solo letras minúsculas y sin acentos');
    return;
  }

  if (texto) {
    const textoEncriptado = texto.replace(/e/g, 'enter')
                                .replace(/i/g, 'imes')
                                .replace(/a/g, 'ai')
                                .replace(/o/g, 'ober')
                                .replace(/u/g, 'ufat');

    const card = document.getElementById('card');
    card.innerHTML = `
      <div class="card-body">
        <p>${textoEncriptado}</p>
      </div>
      <button id="btn-copiar">Copiar</button>
    `;

    document.getElementById('btn-copiar').addEventListener('click', function () {
      navigator.clipboard.writeText(textoEncriptado);
    });

    document.getElementById('btn-desencriptar').disabled = false;
  }
});

document.getElementById('btn-desencriptar').addEventListener('click', function () {
  document.getElementById('ingrese-texto').value = '';
  document.getElementById('btn-desencriptar').disabled = true;

  const card = document.getElementById('card');
  card.innerHTML = `
    <div id="card-content">
      <img src="static/img/buscador.png" alt="buscador" />
      <p>Ningún mensaje encontrado</p>
      <p>Ingresa texto para encriptar o desencriptar</p>
    </div>
  `;
});
