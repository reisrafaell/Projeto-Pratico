export default function input() {
  const testInput = document.querySelector("#senhaa");

  testInput.addEventListener("input", () => {
    testInput.style.letterSpacing = "0.4em";
    testInput.style.fontSize = "38px";
  });
}
