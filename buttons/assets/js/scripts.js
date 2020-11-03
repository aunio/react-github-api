// Create a new list item when clicking on the "Add" button
function newElement() {

  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



function newEvent() {
  //
  var eventList = document.getElementById('eventList');

  //
  var eventTitle = document.createElement('h4');
  var eventTitle_text = document.createTextNode('Novo Evento');

  //
  var eventContent = document.createElement('div');
  eventContent.classList.add('form-row')

  //
  var eventDateContent = document.createElement('div');
  eventDateContent.classList.add('form-group')
  eventDateContent.classList.add('col-5')

  eventTitle.appendChild(eventTitle_text)

  eventList.appendChild(eventTitle)
  eventList.appendChild(eventContent)

  eventContent.appendChild(eventDateContent)
}