//TODO: API QUERY WITH USER INPUT
//apiKey = e93d5153f6bd745ab58596c98cf9a980
let api = "https://api.openweathermap.org/data/2.5/weather?q=";
let metric = "&units=metric&";
let apiKey = "appid=e93d5153f6bd745ab58596c98cf9a980";

let weatherData;
let x = 0;
let _input;
let _button;

function setup() {
  createCanvas(600, 400);
  //DOM
  _button = select(".submit");
  _input = select("#city");
  _button.mousePressed(weatherAsk);
}
function weatherAsk() {
  let url = api + _input.value() + metric + apiKey;
  console.log(url);
  loadJSON(url, gotData);
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
