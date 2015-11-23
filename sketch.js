var arch;

function preload(){
  var url = 'event.json';
  arch = loadJSON(url);
}

function setup(){
  var canvas = createCanvas(300,100);
  canvas.parent('sketch');

  var events = arch.events;
  var name = [];
  var nature = [];

  // this is a special loop for objects: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for...in
  for(var key in events){
    name.push(events[key].name);
    nature.push(events[key].nature);
  }

  console.log(name);
  console.log(nature);
}

function draw(){
}
