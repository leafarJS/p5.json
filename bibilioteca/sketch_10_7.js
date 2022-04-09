//TODO: Wordnik API and JavaScript
let url1 = "api.wordnik.com/v4/word.json/";
let word = "dead";
let url2 =
  "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=";
let apiKey = "bbjxwutb3z17pa4pqk9a5bqea2cqarp8cfpwut1svqipeqrnl";
let link;
function setup() {
  noCanvas();
  link = createA("#", "dead");
  link = mousePressed(askWordnik);
}
function askWordnik() {
  loadJSON(url1 + word + url2, dameInformacion);
}
function dameInformacion(data) {
  let index = floor(random(0, data.length));
  let index1 = floor(random(0, data[index].words.length));
  word = data[index].words[index1];
  link.html(word);
}
function draw() {}
