var arch;
var w = window;
var wX = w.innerWidth;
var wY = w.innerHeight;

function preload() {
  var url = 'event.json';
  arch = loadJSON(url);
}

function setup() {
  createCanvas(wX,wY);
  background(0);

  var events = arch.events;
  var nameIsNeutral = [];
  var nameIsGood = [];
  var nameIsEvil = [];

  for (var i = 0; i < events.length; i++) {
    if (events[i].nature == "neutral") {
      nameIsNeutral.push(events[i].name);
    }
    else if (events[i].nature == "good") {
      nameIsGood.push(events[i].name);
    }
    else {
      nameIsEvil.push(events[i].name);
    }
  }

  nameIsNeutral.sort();
  var neutral = nameIsNeutral.join("  ");
  nameIsGood.sort();
  var good = nameIsGood.join("  ");
  nameIsEvil.sort();
  var evil = nameIsEvil.join("  ");

  textSize(32);
  noStroke();
  fill(255);
  text("Archetypal events",30,60);
  fill(0,141,202);
  text(neutral,30,140);
  fill(34,177,76);
  text(good,30,200);
  fill(221,0,0);
  text(evil,30,260);

  textSize(16);
  fill(0,141,202);
  text("neutral",30,340);
  fill(34,177,76);
  text("good",30,370);
  fill(221,0,0);
  text("evil",30,400);
}

function draw() {
}
