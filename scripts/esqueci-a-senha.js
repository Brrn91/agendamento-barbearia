const botaoModal = document.querySelector(".botao-modal");
const modalFundo = document.querySelector(".modal-fundo");
const botaoFechar = document.querySelector(".botao-fechar");

botaoModal.addEventListener("click", function () {
  modalFundo.classList.add("modal-aberto");
});

botaoFechar.addEventListener("click", function () {
  modalFundo.classList.remove("modal-aberto");
});
