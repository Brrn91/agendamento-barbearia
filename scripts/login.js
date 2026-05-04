const modalFundo = document.querySelector(".modal-fundo");
const botaoFechar = document.querySelector(".botao-fechar");

if (modalFundo) {
  document.querySelectorAll(".botao-modal").forEach(btn => {
    btn.addEventListener("click", () => {
      modalFundo.classList.add("modal-aberto");
    });
  });

  botaoFechar?.addEventListener("click", () => {
    modalFundo.classList.remove("modal-aberto");
  });

  modalFundo.addEventListener("click", (e) => {
    if (e.target === modalFundo) {
      modalFundo.classList.remove("modal-aberto");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalFundo.classList.contains("modal-aberto")) {
      modalFundo.classList.remove("modal-aberto");
    }
  });
}

const formRecuperacao = document.getElementById("form-recuperacao");
if (formRecuperacao) {
  formRecuperacao.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("email-recuperacao");
    const email = emailInput.value.trim();

    if (!email) {
      alert("Por favor, preencha o campo de e-mail.");
      emailInput.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      emailInput.focus();
      return;
    }

    alert(`E-mail de recuperação enviado com sucesso para ${email}!`);
    emailInput.value = "";
    modalFundo?.classList.remove("modal-aberto");
  });
}

const formLogin = document.getElementById("form-login");
if (formLogin) {
  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    if (!email) {
      alert("Por favor, preencha o campo de e-mail.");
      return;
    }

    if (!senha) {
      alert("Por favor, preencha o campo de senha.");
      return;
    }

    if (senha.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    alert("Login realizado com sucesso! (Backend não implementado)");
  });
}
