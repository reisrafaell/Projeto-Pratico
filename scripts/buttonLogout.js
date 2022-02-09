export default function buttonLogout(){

    const getButton = document.querySelector('#textFooterSix button') 
        
    getButton.addEventListener('click', ()=>{
     history.pushState(
          null,
          "Login - Compass",
          "https://reisrafaell.github.io/Projeto-Pratico/"
        )
       window.location.reload()

})}