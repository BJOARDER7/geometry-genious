// blog button
document.getElementById('blog-btn').addEventListener('click', function(){
  window.location.href = "question/index.html";
});

let serialNo = 0;

// triangle area
document.getElementById('triangle-calc-btn').addEventListener('click', function(){
  // get triangle value
  const triangleBase = getInputTagValue('triagle-base');
  const triangleHeight = getInputTagValue('triagle-height');
  const triangle = getAreaName('triangle');
  
  // triangle calculation
  const triangleArea = 0.5 * triangleBase * triangleHeight;
  // validation & create output area
  const areaValue = validationOutput(triangleBase, triangleHeight,triangle, triangleArea);
   
});

// rectangle area
document.getElementById('rectagle-calc-btn').addEventListener('click', function(){
  // get rectangle value
  const rectangleWidth = getInputTagValue('rectangle-width');
  const rectabgleLength = getInputTagValue('rectangle-length');
  const rectangle = getAreaName('rectangle');
  // rectangle calculation
  const rectangleArea = rectangleWidth * rectabgleLength;

  // validation & create output area
  const areaValue = validationOutput(rectangleWidth, rectabgleLength,rectangle, rectangleArea);  
});

// Parallelogram area
document.getElementById('parallelogram-calc-btn').addEventListener('click', function(){
  // get Parallelogram value
  const parallelogramBase = getStringTagValue('parallelogram-base');
  const parallelogramHeight = getStringTagValue('parallelogram-height');
  const parallelogram = getAreaName('parallelogram');
  // Parallelogram calculation
  const parallelogramArea = parallelogramBase * parallelogramHeight;

  // validation & create output area
  const areaValue = validationOutput(parallelogramBase, parallelogramHeight,parallelogram, parallelogramArea); 
});
// Rhombus area
document.getElementById('rhombus-calc-btn').addEventListener('click', function(){
  // get Rhombus value
  const diagonal1 = getStringTagValue('diagonal-1');
  const diagonal2 = getStringTagValue('diagonal-2');
  const rhombus = getAreaName('rhombus');
  // Rhombus calculation
  const rhombusArea = diagonal1 * diagonal2;

  // validation & create output area
  const areaValue = validationOutput(diagonal1, diagonal2,rhombus, rhombusArea);
});

// Pentagon area
document.getElementById('pentagon-calc-btn').addEventListener('click', function(){
  // get Pentagon value
  const pentagonPerimeter = getStringTagValue('pentagon-perimeter');
  const pentagonBase = getStringTagValue('pentagon-base');
  const pentagon = getAreaName('pentagon');
  // Pentagon calculation
  const pentagonArea = 0.5 * pentagonPerimeter * pentagonBase;

  // validation & create output area
  const areaValue = validationOutput(pentagonPerimeter, pentagonBase,pentagon, pentagonArea); 
});

// Ellipse area
document.getElementById('ellipse-calc-btn').addEventListener('click', function(){
  // get Ellipse value
  const ellipseAxisA = getStringTagValue('ellipse-axis-a');
  const ellipseAxisB = getStringTagValue('ellipse-axis-b');
  const ellipse = getAreaName('ellipse');

  // Ellipse calculation
  const ellipseAreaValue = 3.14 * ellipseAxisA * ellipseAxisB;
  const ellipseAreaFloat = parseFloat(ellipseAreaValue);
  const ellipseArea = ellipseAreaFloat.toFixed(2);

  // validation & create output area
  const areaValue = validationOutput(ellipseAxisA, ellipseAxisB,ellipse, ellipseArea); 
});



