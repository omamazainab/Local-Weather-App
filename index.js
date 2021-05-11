const api = "https://weather-proxy.freecodecamp.rocks/api/current?";

let result;
let currentUnit = 'C'
getLocation()

console.log(result)

function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getPosition)
  }else console.log('Geo location is not supported by this browser')
}

function getPosition(position){

    async function getWeather(longitude,latitude){

      const response = await fetch(api+`lat=${longitude}&lon=${latitude}`); 
      const data = await response.json();

      document.getElementById('location').innerHTML= data.name + ", " + data.sys.country
      document.getElementById('temperature').innerHTML=  data.main.temp
      document.getElementById('main').innerHTML=  data.weather[0].main
      console.log(data)
       
    }

    getWeather(
      position.coords.latitude,   position.coords.longitude
    )

}

function unitConversion(value){
  if(currentUnit == C){
    currentUnit = 'F'
    return (value * 9/5) + 32
  }else{
    currentUnit = 'C'
    return (value - 32) * 5/9 
  }
}