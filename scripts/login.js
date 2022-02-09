import stopwatch from "./stopwatch.js";

export default function login() {
  const button = document.getElementById("buttonLoginb");

  const title = document.querySelector("title");

  const divErro = document.getElementById("textError");

  let msgErro = document.createElement("p");

  const user = document.getElementById("user");

  const senha = document.getElementById("senhaa");

  const displaySection1 = document.getElementById("Sectionlogin");

  const displaySection2 = document.getElementById("sectionHome");

  const borderInput = document.getElementById("cardUser");

  const borderSenha = document.getElementById("cardSenha");

  button.addEventListener("click", () => {
    if (user.value === "admin" && senha.value === "admin") {
      msgErro.textContent = "";
      borderInput.style.border = "1px solid #ffffff";
      borderSenha.style.border = "1px solid #ffffff";
      displaySection1.style.display = "none";
      displaySection2.style.display = "flex";
      title.textContent = "Home";
      stopwatch();
      history.pushState(
        null,
        "Home - Compass",
        "https://reisrafaell.github.io/Projeto-Pratico/Home"
      )
      
    } else {
      msgErro.innerHTML =
        "Ops, usuário ou senha inválidos <br> Tente Novamente!";
      divErro.appendChild(msgErro);
      borderInput.style.border = "1px solid #E9B425";
      borderSenha.style.border = "1px solid #E9B425";
    }
  });
}
