//TODO: INTRODUCTION TO DTA  AND APIs IN JAVASCRIPT
//CSV, XML, JSON, TEXT FIL, PDF | API
//TODO: WHAT IS JSON?
let data;
function preload() {
  data = loadJSON("birds.json");
}

function setup() {
  //createCanvas(640, 360);
  // let birt = data.birds[1].members[2];
  // createP(birt);
  let birds = data.birds;
  for (let i = 0; i < birds.length; i++) {
    createElement("h3", birds[i].family);
    let members = birds[i].members;
    for (let j = 0; j < members.length; j++) {
      createDiv(members[j]);
    }
  }
}

function draw() {}
