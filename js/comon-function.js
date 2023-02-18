// function for getting number value from input field by using id
function getInputTagValue(id){
  const getValueString = document.getElementById(id).value;
  const getValue = parseInt(getValueString);
  return getValue;
}
// function for getting number value from h2 field by using id
function getStringTagValue(id){
  const getValueString = document.getElementById(id).innerText;
  const getValue = parseInt(getValueString);
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
  const ul = document.createElement('ul');
  ul.innerHTML = `
    <tr class="my-2">
      <td>${serialNo}.</td>
      <td>${geometry}</td>
      <td">${triangleArea}cm<sup>2</sup></td>
      <td"><button class="bg-blue-500 rounded px-1 py-1 my-2">Convert to m<sup>2</sup></button></td>
    
    </tr>
  `
  calculationOutput.appendChild(ul);
}