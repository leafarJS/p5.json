//TODO: WORKING WITH APIs IN JAVASCRIPT OPENWEATER API
//API INTERFAZA DE PROGRAMACIÓN DE APLICACIONES
//apiKey = e93d5153f6bd745ab58596c98cf9a980
let url =
  "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=e93d5153f6bd745ab58596c98cf9a980";
let weatherData;
let x = 0;
function setup() {
  createCanvas(600, 400);
  loadJSON(url, gotData); // cuando no funciona la ruta intentar con 'jsonp'
}
function gotData(data) {
  console.log(data);
  weatherData = data;
}
function draw() {
  background(0);
  if (weatherData) {
    circle(100, height / 2, weatherData.main.temp);
    circle(300, height / 2, weatherData.main.humidity);
    //createP(weatherData.name);
  }
  stroke(255);
  line(x, 0, x, height);
  x += 1;
  if (x > width) {
    x = 0;
  }
}
