export default function hours()  {
  //const containerSection = document.getElementById('sectionHome')

 // const containerWatch = document.getElementById("watch");

  let newWatch = document.getElementById("watch");

  let newDate = document.getElementById("watchParagrafo");

  let date = new Date();

  let diaMes = date.getDate();

  let horas = date.getHours();

  let minutos = date.getMinutes();

 // let segundos = date.getSeconds();

  let diaDaSemana = date.getDay();

  let mes = date.getMonth();

  let ano = date.getFullYear();

  const diaSemana = new Array(
    "domingo",
    "segunda-feira",
    "trça-feira",
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

    newWatch.innerText = `${horas<=9 ? '0' : ""}${horas}:${minutos<=9 ? '0' : ""}${minutos}`;  
    
   // console.log("Ativou setTimeout");

    newDate.innerText = ` ${diaSemana[diaDaSemana]}, ${diaMes<=9 ? '0' : ""}${diaMes} de ${meses[mes]} de ${ano}. `;
    

  
};
