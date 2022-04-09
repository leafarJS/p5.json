//TODO: Mapping Earthquake Data api
let mapimg;
let centroLat = 0;
let centroLong = 0;
//16.2902° S 63.5887° O
let lat = -16.20154;
let long = -63.588653;
let zoom = 1;
let earthqueakes;

function preload() {
  mapimg = loadImage(
    "https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoibGVhZmFyMTk3N25vZGVqcyIsImEiOiJjbDFyd2ZvaTcyMmU3M2JzOWhxcTU3MTBxIn0.Q4mMV61m-KieCHJllZN9Lg"
  );
  earthqueakes = loadStrings(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv"
  );
  //earthqueakes = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv");
}

function setup() {
  createCanvas(1024, 512);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  let cx = webMercatorX(centroLong);
  let cy = webMercatorY(centroLat);

  for (let i = 0; i < earthqueakes.length; i++) {
    let data = earthqueakes[i].split(/,/);
    let lat = data[1];
    let long = data[2];
    let mag = data[4];
    let x = webMercatorX(long) - cx;
    let y = webMercatorY(lat) - cy;

    mag = pow(10, mag);
    mag = sqrt(mag);

    let magmax = sqrt(pow(10, 10));

    let d = map(mag, 0, magmax, 0, 180);
    stroke(255, 0, 255);
    fill(255, 0, 255, 200);
    circle(x, y, d);
  }
}
//formula en wikipedia.org
function webMercatorX(long) {
  long = radians(long);
  let a = (256 / PI) * pow(2, zoom);
  let b = long + PI;
  return a * b;
}
function webMercatorY(lat) {
  lat = radians(lat);
  let a = (256 / PI) * pow(2, zoom);
  let b = tan(PI / 4 + lat / 2);
  let c = PI - log(b);
  return a * c;
}

function draw() {}
