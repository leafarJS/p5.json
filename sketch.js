//TODO: Challenge #75: Wikipedia API
let searchUrl =
  "https://en.wikipedia.org/w/api.php?action=opensearch&forma=json&search=";
let contentWiki =
  "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=";
let userInput;
let counter = 0;
function setup() {
  noCanvas();
  userInput = select("#userInput");
  userInput.changed(startSearch);
  //userInput.changed(goWiki);

  function startSearch() {
    counter = 0;
    goWiki(userInput.value());
  }

  function goWiki(term) {
    counter++;
    if (counter < 11) {
      //let term = userInput.value();
      let url = searchUrl + term;
      loadJSON(url, gotSearch, "jsonp");
    }
  }

  function gotSearch(data) {
    //console.log(data);
    let len = data[1].length;
    //console.log(len);
    let index = floor(random(len));
    let title = data[1][index];
    createDiv(title);
    title = title.replace(/\s+/g, "_");
    //console.log(`Querying: ${title}`);
    let url = contentWiki + title;
    loadJSON(url, gotContent, "jsonp");
  }

  function gotContent(data) {
    let page = data.query.pages;
    let pageId = Object.keys(data.query.pages)[0];
    console.log(pageId);
    let content = page[pageId].revisions[0]["*"];
    console.log(content);
    let wordRegex = /\b\w{4,}\b/g;
    let words = content.match(wordRegex);
    let word = random(words);
    goWiki(word);
    console.log(word);
  }

  goWiki(userInput.value());
}

function draw() {}
