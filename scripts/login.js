const modalFundo = document.querySelector(".modal-fundo");
function esqueceuASenha() {
  const botaoModal = document.querySelector(".botao-modal");
  const botaoFechar = document.querySelector(".botao-fechar");

  botaoModal.addEventListener("click", function () {
    modalFundo.classList.add("modal-aberto");
  });

  botaoFechar.addEventListener("click", function () {
    modalFundo.classList.remove("modal-aberto");
  });
}

esqueceuASenha();

// Envia um alerta de sucesso ao redefinir a senha

function redefinirSenha(event) {
  if (document.getElementById("email-recuperacao").value === "") {
    alert("Por favor, preencha o campo de e-mail.");
  } else {
    event.preventDefault();
    alert(
      `E-mail de recuperação enviado com sucesso para ${document.getElementById("email-recuperacao").value}!`,
    );
    modalFundo.classList.remove("modal-aberto");
  }
}
