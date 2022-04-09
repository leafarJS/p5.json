//TODO: API Query with JavaScript setInterval()
let url = "http://api.open-notify.org/iss-now.json";
let x = 0;
let issX = 0;
let issY = 0;
let radio = 12;
function setup() {
  createCanvas(700, 500);
  setInterval(askISS, 100);
}
function askISS() {
  loadJSON(url, dameInformacion, "jsonp"); //jsonp
}
function dameInformacion(informacion) {
  issX = informacion.iss_position.latitude * -1;
  issY = informacion.iss_position.longitude;
  console.log(issX, issY);
  // issX = map(lat, -10, 10, 0, width);
  // issY = map(long, -110, 100, 0, height);
  // console.log(issX);
  // console.log(issY);
}
function draw() {
  background(0);

  fill(255);
  circle(issX, issY, radio * 2);

  stroke(255);
  line(x, 0, x, height);
  x += 1;
  if (x > width) {
    x = 0;
  }
}
