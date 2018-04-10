var API_KEY = "cb05dcc678d0709b82a1ef74b91dcfb1";
var fahr = false;
var wd;

    

function displayTemp(c, f) {
  if(f) return Math.round((c * 1.8) + (32)) + " F";
  return Math.round(c) + " C";
}

function render(wd, fahr){
      var currentLocation = wd.name;
      var currentWeather = wd.weather[0].description;
      var currentTemp = displayTemp(wd.main.temp, fahr);
      var high = displayTemp(wd.main.temp_max, fahr);
      var low = displayTemp(wd.main.temp_min, fahr);
      var icon = wd.weather[0].icon;
      var currentHumidity = wd.main.humidity;
      var windDirection = " direction: " + degreeToCardinal(wd.wind.deg);
      var windSpeed = " wind: " + Math.round(wd.wind.speed);
  
      $('#currentWindSpeed').html(windSpeed + " m/s ");
      $('#currentWindDirection').html(windDirection);
      $('#currentHumidity').html("humidity: " + currentHumidity + "% ");
      $('#currentLocation').html(currentLocation);
      $('#currentTemp').html(currentTemp + "\u00B0");
      $('#currentWeather').html(currentWeather);
      $('#high-low').html(high + "\u00B0" + " / " + low + "\u00B0");
  
      var iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";
      $('#currentTemp').prepend('<img src="' + iconSrc + '">');
  console.log(wd);
  
                if(wd.weather[0].description==="broken clouds"){
    $('body').css('background-image','url(https://ak4.picdn.net/shutterstock/videos/1016164/thumb/12.jpg)');
  }
  else if(wd.weather[0].description==="clear sky"){
     $('body').css('background-image','url(https://pbs.twimg.com/media/DAwPUjTXYAICzbG.jpg)');   
  }
    else if(wd.weather[0].description==="few clouds"){
    $('body').css('background-image','url(http://nj1015.com/files/2017/10/sun-clouds-blue-sky-146410201994j.jpg?w=980&q=75)');
  }
  else if(wd.weather[0].description==="scattered clouds"){
    $('body').css('background-image','url(https://images.fineartamerica.com/images-medium-large-5/sunrays-scattered-by-clouds-over-trieste-bay-ian-middleton.jpg)');
  }
    else if(wd.weather[0].description==="shower rain"){
    $('body').css('background-image','url(http://media.moddb.com/images/downloads/1/120/119783/rain-04.jpg)');
  }
      else if(wd.weather[0].description==="rain"){
    $('body').css('background-image','url(http://cloud-maven.com/wp-content/uploads/2016/09/DSC_7382-1024x683.jpg)');
  }
        else if(wd.weather[0].description==="thunderstorm"){
    $('body').css('background-image','url(http://cloud-maven.com/wp-content/uploads/2016/09/DSC_7382-1024x683.jpg)');
  }
          else if(wd.weather[0].description==="snow"){
    $('body').css('background-image','url(https://i.ytimg.com/vi/V6cNXL2TUIM/maxresdefault.jpg)');
  }
          else if(wd.weather[0].description==="mist"){
    $('body').css('background-image','url(https://static.pexels.com/photos/45222/forest-fog-nature-winter-45222.jpeg)');
  } else if(wd.weather[0].description==="light intensity shower rain"){
    $('body').css('background-image','url(https://i.ytimg.com/vi/erIwVs5OuS8/maxresdefault.jpg)');
  } else if(wd.weather[0].description==="haze"){
    $('body').css('background-image','url(http://52.8.188.193/wp-content/uploads/2015/11/haze-Indonesia.jpg)');
  }
  
  //wind speed statements below
  

  
  function degreeToCardinal(degree) {
        if (degree > 337.5 && degree < 22.5) {
            return "N";
        } else if (degree > 22.5 && degree < 67.5) {
            return "NE";
        } else if (degree > 67.5 && degree < 112.5) {
            return "E";
        } else if (degree > 112.5 && degree < 157.5) {
            return "SE";
        } else if (degree > 157.5 && degree < 202.5) {
            return "S";
        } else if (degree > 202.5 && degree < 247.5) {
            return "SW";
        } else if (degree > 247.5 && degree < 292.5) {
            return "W";
        } else if (degree > 292.5 && degree < 337.5) {
            return "NW";
        }
    else if ("undefined")
      return "variable"
    }
  
  
  //wind speed if statements above
}
  

$(function(){
  
  var loc;
  
  $.getJSON('https://ipinfo.io/', function(d){
    console.log("assigning the data...")
    loc = d.loc.split(",");
    console.log(loc);
    
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + loc[0] + '&lon=' + loc[1] +'&APPID=' + API_KEY, function(apiData){
    wd = apiData;
      
      render(apiData, fahr);
      
      $('#convert').click(function(){
        fahr = !fahr;
        render(wd, fahr);
        
         })
      
       })
    
     })
  
  })