export default function stopwatch() {

    
    const timer = document.querySelector("#textFooterThee h1");

    let initTimer = 600
    let newNumber = parseInt(timer)
  
    console.log(newNumber)
  
   setInterval(() => {
    timer.innerHTML = initTimer
     initTimer--;
    if (initTimer == 0) {
     window.location.reload();

    }


   }, 1000);
    
       
      
}

