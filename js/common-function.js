// function for getting number value from input field by using id
function getInputTagValue(id){
  const getValueString = document.getElementById(id).value;
  const getValue = parseFloat(getValueString);
  return getValue;
}
// function for getting number value from h2 field by using id
function getStringTagValue(id){
  const getValueString = document.getElementById(id).innerText;
  const getValue = parseFloat(getValueString);
  return getValue;
}
// get arae name
function getAreaName(id){
  const areaName = document.getElementById(id).innerText;
  return areaName;
}

// calculation output function
function createOutput(id,geometry,triangleArea){
const calculationOutput = document.getElementById(id);
  const table = document.createElement('table');
  table.innerHTML = `
    <tr class="text-center">
      <td>${serialNo}.</td>
      <td>${geometry}</td>
      <td>${triangleArea}cm<sup>2</sup></td>
      <td><button class="bg-blue-500 rounded my-2 p-1">Convert to m<sup>2</sup></button></td>
    
    </tr>
  `
  calculationOutput.appendChild(table);
}

// common function for validation & create output table by js
function validationOutput(firstInput, secondInput,areaName, area){
if(isNaN(firstInput) || isNaN(secondInput)){
  alert('Please enter a valid number with two field');
}
else if(firstInput <= 0 || secondInput<= 0){
  alert('Please enter positive number. Negative or zero not acceptable');
}
else {
serialNo += 1;
const outputArea = createOutput('calculation-output', areaName, area);
}
}

// random color generator function
function randomColorGenerate(id) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const cardColor = document.getElementById(id);
  cardColor.style.backgroundColor = "#" + randomColor; 
}

// background color generator
function colorMouseEvent(id){
document.getElementById(id).addEventListener('mouseenter', function(){
  const ellipseRandomColor = randomColorGenerate(id);
});
}
