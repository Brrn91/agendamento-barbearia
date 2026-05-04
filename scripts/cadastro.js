const formCadastro = document.getElementById("form-cadastro");
const senhaInput = document.getElementById("senha");
const confirmarSenhaInput = document.getElementById("confirmar-senha");
const passwordError = document.getElementById("password-error");

function validarSenhasIguais() {
  const senha = senhaInput.value;
  const confirmarSenha = confirmarSenhaInput.value;

  if (confirmarSenha && senha !== confirmarSenha) {
    passwordError.textContent = "As senhas não coincidem";
    confirmarSenhaInput.style.borderColor = "var(--erro)";
    return false;
  } else {
    passwordError.textContent = "";
    if (confirmarSenha) {
      confirmarSenhaInput.style.borderColor = "var(--sucesso)";
    }
    return true;
  }
}

senhaInput.addEventListener("input", function () {
  if (senhaInput.value.length > 0 && senhaInput.value.length < 6) {
    senhaInput.style.borderColor = "var(--erro)";
  } else if (senhaInput.value.length >= 6) {
    senhaInput.style.borderColor = "var(--sucesso)";
  } else {
    senhaInput.style.borderColor = "";
  }
});

confirmarSenhaInput.addEventListener("input", validarSenhasIguais);

if (formCadastro) {
  formCadastro.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;

    if (!nome || nome.length < 3) {
      alert("Por favor, insira seu nome completo (mínimo 3 caracteres).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres.");
      senhaInput.focus();
      return;
    }

    if (!validarSenhasIguais()) {
      alert("As senhas não coincidem.");
      confirmarSenhaInput.focus();
      return;
    }

    alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nEmail: ${email}\n\n(Redirecionando para login...)`);
    window.location.href = "../pages/login.html";
  });
}
