// listens for the submit button to be pressed, then creates a grid with dimensions based on the values inside of Grid Height and Width
document.getElementById('submit').addEventListener('click', makeGrid);

function makeGrid() {
  var parent = document.getElementById('pixelCanvas');
  var height = document.getElementById('inputHeight');
  var width = document.getElementById('inputWeight');
  
  // remove previous grid if it exists
  parent.innerHTML = "";
  
  for (var row = 1; row <= height.value; row++) {
    var tr = document.createElement('tr')
    parent.appendChild(tr);
    tr.id = "row" + row;
    for (var col = 1; col <= width.value; col++) {
      var td = document.createElement('td');
      tr.appendChild(td);
      td.className = "row" + row + "col" + col;
    }
  }
}

document.getElementById('colorPicker').addEventListener('change', myFunction);

function myFunction() {
  document.getElementById('pixelCanvas').addEventListener('mousedown', function(element) {
    var clickElement = element.target;  // get the dom element clicked.
    var color = document.getElementById('colorPicker').value; // get the color selected
    clickElement.style.backgroundColor = color;
  });
}
