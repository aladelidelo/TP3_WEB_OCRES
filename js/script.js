
// Fonction appelée lors du click du bouton
function getThreeDayForecast(){
  
}


function cityInput() {
    const city = document.getElementById("city-input").value;

    const apiWeather = new API_WEATHER(city);
    apiWeather
        .fetchTodayForecast()
    .then(function(response) {

      const data = response.data;
      console.log('response :>> ', response);
      // Récupère la donnée d'une API
      
      // On récupère l'information principal

      var i =0;
      while (i<=3)
      {
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        document.querySelectorAll('#today-forecast-main')[i].innerHTML = main;
        document.querySelectorAll('#today-forecast-more-info')[i].innerHTML = description;
        document.querySelectorAll('#icon-weather-container')[i].innerHTML = icon;
        document.querySelectorAll('#today-forecast-temp')[i].innerHTML = `${temp}°C`;
        i++;
      }


      
    })
        .catch(function(error) {
            // Affiche une erreur
            console.error(error);
        });
    return city;
}

function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {

      const data = response.data;
      console.log('response :>> ', response);
      // Récupère la donnée d'une API
      
      // On récupère l'information principal

      var i =0;
      while (i<=3)
      {
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        document.querySelectorAll('#today-forecast-main')[i].innerHTML = main;
        document.querySelectorAll('#today-forecast-more-info')[i].innerHTML = description;
        document.querySelectorAll('#icon-weather-container')[i].innerHTML = icon;
        document.querySelectorAll('#today-forecast-temp')[i].innerHTML = `${temp}°C`;
        i++;
      }


      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

window.onload=start();

///document.getElementById("city-input").value;
///console.log(document.getElementById("city-input").value);

/// start();