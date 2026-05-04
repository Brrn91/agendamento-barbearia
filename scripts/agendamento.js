const formAgendamento = document.getElementById("form-agendamento");
const dataInput = document.getElementById("data");
const horaInput = document.getElementById("hora");

function configurarDataMinima() {
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, "0");
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const ano = hoje.getFullYear();
  dataInput.min = `${ano}-${mes}-${dia}`;
}

function validarData(data) {
  const dataSelecionada = new Date(data + "T00:00:00");
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  if (dataSelecionada < hoje) {
    alert("Não é possível agendar em uma data passada.");
    return false;
  }

  const diaSemana = dataSelecionada.getDay();
  if (diaSemana === 0) {
    alert("A barbearia está fechada aos domingos. Escolha outro dia.");
    return false;
  }

  return true;
}

function validarHorario(hora) {
  const [horas, minutos] = hora.split(":").map(Number);
  const horarioMinimo = 9;
  const horarioMaximo = 20;

  if (horas < horarioMinimo || horas >= horarioMaximo) {
    alert("Horário de funcionamento: 09h às 20h.");
    return false;
  }

  return true;
}

configurarDataMinima();

if (formAgendamento) {
  formAgendamento.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const servico = document.getElementById("servico").value;
    const barbeiro = document.getElementById("barbeiro").value;
    const data = dataInput.value;
    const hora = horaInput.value;

    if (!nome || nome.length < 3) {
      alert("Por favor, insira seu nome completo.");
      return;
    }

    if (!servico) {
      alert("Por favor, selecione um serviço.");
      return;
    }

    if (!barbeiro) {
      alert("Por favor, selecione um barbeiro.");
      return;
    }

    if (!data) {
      alert("Por favor, selecione uma data.");
      return;
    }

    if (!validarData(data)) {
      return;
    }

    if (!hora) {
      alert("Por favor, selecione um horário.");
      return;
    }

    if (!validarHorario(hora)) {
      return;
    }

    const servicoNomes = {
      corte: "Corte de cabelo",
      barba: "Barba",
      "corte-barba": "Corte de cabelo e barba",
    };

    const barbeiroNomes = {
      barbeiro1: "Barbeiro 1",
      barbeiro2: "Barbeiro 2",
    };

    const [dia, mes, ano] = data.split("-");
    const dataFormatada = `${dia}/${mes}/${ano}`;

    alert(
      `Agendamento confirmado!\n\n` +
        `Cliente: ${nome}\n` +
        `Serviço: ${servicoNomes[servico]}\n` +
        `Barbeiro: ${barbeiroNomes[barbeiro]}\n` +
        `Data: ${dataFormatada}\n` +
        `Horário: ${hora}\n\n` +
        `(Backend não implementado)`
    );

    formAgendamento.reset();
    configurarDataMinima();
  });
}
