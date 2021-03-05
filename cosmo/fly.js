var x = 0, y = 0;
var stepSize = 5.0;
var letters = "Why's daytime so brief It hurts that a century's so easily filled. The blue sky's so vast and boundless Ten thousand years and as long as Tai Chi.The sideburns of Lady Hemp already fallenHalf o'them already frost whiteIt’s already a trillion guffawsSince the Lord of Heaven saw Lady JadeI long to embrace the six dragonsWith a backward glance tie ’em to the Fu Song treeThe North Ladle to serve fine wineTo urge the dragons a measure each. What care I about Fame 'n FortuneHad I the might to hold for Man the flight of light.";
var fontSizeMin = 3;
var angleDistortion = 0.0;
var counter = 0;


function setup() {
  // use full screen size 

  smooth();
  cursor(CROSS);

  x = mouseX;
  y = mouseY;

  textAlign(LEFT);
  fill(0);
}

function draw() {
  if (mouseOver) {
    var d = dist(x, y, mouseX, mouseY);
    textFont('Georgia');
    textSize(fontSizeMin+d/2)
      var newLetter = letters.charAt(counter);
    ;
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY-y, mouseX-x); 

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
      if (counter > letters.length-1) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
}

function mouseOver() {
  x = mouseX;
  y = mouseY;
}

function keyTyped() {
  if (key == 's' || key == 'S') save("P_2_3_3_01.png");
}

function keyPressed() {
  // angleDistortion ctrls arrowkeys up/down 
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (keyCode == UP_ARROW) angleDistortion += 0.1;
  if (keyCode == DOWN_ARROW) angleDistortion -= 0.1;
}
