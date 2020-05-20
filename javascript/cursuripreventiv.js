var solveButtons = document.getElementsByClassName("capito-open")

Array.prototype.forEach.call(solveButtons, myFunc)

function myFunc(item, index)
{
	//console.log('lele de la ' + index);
	item.onclick = function() {showPage(index) }
}

function showPage(id)
{
  console.log(id)
	sessionStorage.setItem('idPreventiv', id)
  window.document.location = '../html/template-preventiv.html'
}
 
 var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}