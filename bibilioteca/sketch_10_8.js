//TODO: The Giphy API and JavaScript

let api = "http://api.giphy.com/v1/gifs/search?";
let apiKey = "&api_key=K2VGStqDntogxhlo7UZmLesGLFB6LQsw";
let query = "&q=sex"; //"&q=ryan+gosling"
function setup() {
  noCanvas();
  let url = api + query + apiKey;
  loadJSON(url, gotData);
}
function gotData(info) {
  for (let i = 0; i < info.data.length; i++) {
    createImg(info.data[i].images.original.url);
  }
}
function draw() {}
