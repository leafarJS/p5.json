//TODO: INTRODUCTION TO DTA  AND APIs IN JAVASCRIPT
//CSV, XML, JSON, TEXT FIL, PDF | API
//TODO: WHAT IS JSON?
let flores;
let flower;
function preload() {
  flower = loadJSON("data.json");
}

function setup() {
  createCanvas(640, 360);

  flores = {
    nombre: "rosa",
    color: color(200, 220, 0),
    clima: "calido",
  };
}

function draw() {
  background(0);
  fill(flower.r, flower.g, flower.b);
  text(flower.name, width / 2, height / 2);
  fill(flores.color);
  text(flores.nombre, width / 4, height / 4);
}
