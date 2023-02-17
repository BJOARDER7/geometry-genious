let serialNo = 0;
document.getElementById('triangle-calc-btn').addEventListener('click', function(){
  // get triangle value
  const triangleBase = getInputValue('triagle-base');
  const triangleHeight = getInputValue('triagle-height');
  
  // triangle calculation
  const triangleArea = 0.5 * triangleBase * triangleHeight;

  // create output table by js
   serialNo += 1;
  const triagleOutput = createOutput('calculation-output', triangleArea);
  
  
});
// function for getting number value by using id
function getInputValue(id){
  const getValueString = document.getElementById(id).value;
  const getValue = parseInt(getValueString);
  return getValue;
}

// calculation output function
function createOutput(id,triangleArea){
const calculationOutput = document.getElementById(id);
  const ul = document.createElement('ul');
  ul.innerHTML = `
    <tr class="my-2">
      <td>${serialNo}.</td>
      <td>Triangle</td>
      <td">${triangleArea}cm<sup>2</sup></td>
      <td"><button class="bg-blue-500 rounded px-1 py-1 my-2">Convert to m<sup>2</sup></button></td>
    
    </tr>
  `
  calculationOutput.appendChild(ul);
}