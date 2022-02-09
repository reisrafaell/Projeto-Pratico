export default function hours() {
  let newWatch = document.getElementById("watch");

  let newDate = document.getElementById("watchParagrafo");

  let date = new Date();

  let diaMes = date.getDate();

  let horas = date.getHours();

  let minutos = date.getMinutes();

  let diaDaSemana = date.getDay();

  let mes = date.getMonth();

  let ano = date.getFullYear();

  const diaSemana = new Array(
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
  );

  const meses = new Array(
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  );

  newWatch.innerText = `${horas <= 9 ? "0" : ""}${horas}:${
    minutos <= 9 ? "0" : ""
  }${minutos}`;

  newDate.innerText = ` ${diaSemana[diaDaSemana]}, ${
    diaMes <= 9 ? "0" : ""
  }${diaMes} de ${meses[mes]} de ${ano}. `;
}
