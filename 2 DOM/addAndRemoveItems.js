// add
var list = document.getElementById("myList");
var newElement = document.createElement("li");
newElement.innerHTML = "New Element";
list.appendChild(newElement);

// remove
var elementRemove = document.getElementById("myElement");
elementRemove.parentNode.removeChild(elementRemove);
