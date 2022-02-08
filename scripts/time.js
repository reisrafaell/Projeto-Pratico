import cityStateName from"./cityStateName.js"

export default function time() {  
  const api = {
    key: "64ed82577ced7f69cb1687f0ce536131",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric",
  };
  const myCity = document.querySelector("#climate h2");
  const container_img = document.querySelector("#iconWatch");
  const temp_number = document.querySelector("#climate h1");
  
  window.addEventListener("load", () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(setPosition, showError);
    } else {
      alert("Seu navegador não suporta geolozalicação");
    }
    function setPosition(position) {
      console.log(position);
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      coordResults(lat, long);
    }
    function showError(error) {
      alert(`erro: ${error.message}`);
    }
  });

  function coordResults(lat, long) {
    fetch(
      `${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`http error: status ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        alert(error.message);
      })
      .then((response) => {
        displayResults(response);

        let cityName = response.name
        stateName(cityName);
      });
  }   
  function stateName(city){

    fetch('https://api.weatherapi.com/v1/current.json?key=4c8efc495f40411180e180531220302&q='+city+'&aqi=no')
    .then((respondes)=> respondes.json()).then(resultado=>{  let stateNameCity = resultado.location.region


      let nomeEstado = cityStateName(stateNameCity)
      console.log(nomeEstado)
      myCity.innerText = `${resultado.location.name} - ${nomeEstado} `; 
    })   
    
  }  
  function displayResults(weather) { 
    

    let iconName = weather.weather[0].icon;
    container_img.innerHTML = `<img draggable="false" src="./assets/icons2/${iconName}.png">`;

    let temperature = `${Math.round(weather.main.temp)}°`;
    temp_number.innerHTML = temperature;
  }
  


    










}
