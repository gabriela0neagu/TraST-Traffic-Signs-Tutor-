

pages= JSON.parse(localStorage.getItem('pages'))
console.log(pages["title"])
console.log(pages["continut"])

const titluElem= document.getElementById('titlu')
const continutElem= document.getElementById('info')
const poza1Elem=document.getElementById("poze1")

titluElem.innerText=pages["title"]
continutElem.innerText=pages["continut"]



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