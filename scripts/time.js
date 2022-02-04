
export default function time(){

const api = {
    key: "64ed82577ced7f69cb1687f0ce536131",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}
    const city = document.querySelector("#climate h2")
  
    const container_img = document.querySelector('#iconWatch')
    const container_temp = document.querySelector('.containerTemp')
    const temp_number = document.querySelector('#climate h1')
    const temp_unit = document.querySelector('#climate span')

    window.addEventListener('load', () => {
       
        if ("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(setPosition, showError);
        }
        else {
            alert('navegador não suporta geolozalicação');
        }
        function setPosition(position) {
            console.log(position)
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            coordResults(lat, long);
        }
        function showError(error) {
            alert(`erro: ${error.message}`);
        }
    })
    
    function coordResults(lat, long) {
        fetch(`${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`http error: status ${response.status}`)
                }
                return response.json();
            })
            .catch(error => {
                alert(error.message)
            })
            .then(response => {
                displayResults(response)
            });
    }
    
function displayResults(weather) {
    console.log(weather)

    city.innerText = `${weather.name}, ${weather.sys.country}`;  

    let iconName = weather.weather[0].icon;
    container_img.innerHTML = `<img src="../assets/icons2/${iconName}.png">`;

    let temperature = `${Math.round(weather.main.temp)}`
    temp_number.innerHTML = temperature;
    temp_unit.innerHTML = `°c`;


  
}


(function changeTemp() {
    temp_number_now = temp_number.innerHTML

    if (temp_unit.innerHTML === "°c") {
        let f = (temp_number_now * 1.8) + 32
        temp_unit.innerHTML = "°f"
        temp_number.innerHTML = Math.round(f)
    }
    else {
        let c = (temp_number_now - 32) / 1.8
        temp_unit.innerHTML = "°c"
        temp_number.innerHTML = Math.round(c)
    }
})


}




















