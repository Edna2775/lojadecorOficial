
document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById('mostrarFormulario');
  const container = document.getElementById('formContainer');
  const sucesso = document.getElementById('mensagemSucesso');
  const form = document.getElementById('formEncomenda');

  if (botao && container && form && sucesso) {
    botao.addEventListener('click', function () {
      container.classList.remove('d-none');
      botao.classList.add('d-none');
      container.scrollIntoView({ behavior: 'smooth' });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      sucesso.classList.remove('d-none');
      form.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ... (outro código que já existe)

  const formContato = document.getElementById("formContato");
  const modal = new bootstrap.Modal(document.getElementById("modalSucesso"));

  if (formContato) {
    formContato.addEventListener("submit", function (e) {
      e.preventDefault();
      formContato.reset();
      modal.show();
    });
  }
});

