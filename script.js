// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Get the modal
var modals = document.getElementById("myModals");

// Get the button that opens the modal
var btns = document.getElementById("myBtns");

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("closes")[0];

// When the user clicks the button, open the modal 
btns.onclick = function() {
  modals.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans.onclick = function() {
  modals.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
windows.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
