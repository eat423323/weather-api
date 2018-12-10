
$(document).ready(()=>{
  let city = 'Kaohsiung';
  function getWeather(city){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&APPID=0df8de3acad338582e251d72797ce8b2", (data)=>{
      console.log(data);

      let icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      let weather = data.weather[0].main;
      let temperature= data.main.temp;
      let humidity = data.main.humidity;

      $('.icon').attr("src", icon);


      /*
      $('.weather').append(weather);
      $('.temp').append(temperature);
      $('.humidity').append(humidity);
      this will append the stuff INTO the selected element but place it at the end
      */

      $('.weather').html('weather: ' + weather);
      $('.humidity').html('humidity: ' + humidity + ' %');
      $('.temp').html(temperature + ' °C');
    });
  }

  getWeather(city);

  $('#btn').on('click', ()=>{
    city = document.city.city.value;
    getWeather(city);
  })

  $('#city').on('keyup', function(e){
    e.preventDefault();
    //alert(e.keyCode+"ggg");
    if ( e.keyCode === 13 ){
      document.getElementById('btn').click();
      city = document.city.city.value;
      getWeather(city);
    };
  })
})
