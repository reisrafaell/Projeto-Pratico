export default function stopwatch() {
  const timer = document.querySelector("#textFooterThee h1");

  let initTimer = 600; 

  setInterval(() => {
    timer.innerHTML = initTimer;
    initTimer--;
    if (initTimer === 0) {
        history.pushState(
            null,
            "Login - Compass",
            "https://reisrafaell.github.io/Projeto-Pratico/"
          )
      window.location.reload();
    }
  }, 1000);
}
