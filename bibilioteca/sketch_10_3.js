//TODO: LOADING JSON DATA FRON URL
let x = 0;
let spaceData;
function setup() {
  createCanvas(600, 400);
  loadJSON("http://api.open-notify.org/astros.json", gotData); // cuando no funciona la ruta intentar con 'jsonp'
}
function gotData(data) {
  console.log(data);
  spaceData = data;
}
function draw() {
  background(0);
  if (spaceData) {
    randomSeed(4);
    for (let i = 0; i < spaceData.number; i++) {
      fill(255);
      circle(random(width), random(height), 32);
    }
  }

  stroke(255);
  line(x, 0, x, height);
  x += 1;
  if (x > width) {
    x = 0;
  }
}
